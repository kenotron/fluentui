// @ts-check

const { task, series, parallel, condition, option, argv, logger } = require('just-task');
const { rig } = require('./tasks/rig');
const path = require('path');
const fs = require('fs');

let packageJson;

option('production');

// Adds an alias for 'npm-install-mode' for backwards compatibility
option('min', { alias: 'npm-install-mode' });

Object.keys(rig).forEach(taskFunction => {
  if (typeof rig[taskFunction] === 'function') {
    registerTask(kebabCase(taskFunction), rig[taskFunction]);
  } else if (typeof rig[taskFunction] === 'object') {
    Object.keys(rig[taskFunction]).forEach(name => {
      registerTask(kebabCase(`${taskFunction}:${name}`), rig[taskFunction][name]);
    });
  }
});

task('ts', parallel('ts:commonjs', 'ts:esm', condition('ts:amd', () => argv().production && !argv().min)));

task(
  'build',
  series(
    'clean',
    'copy',
    'sass',
    parallel(
      condition('tslint', () => !argv().min),
      condition('jest', () => !argv().min),
      series(
        'ts',
        condition('lint-imports', () => !argv().min),
        parallel(condition('webpack', () => !argv().min), condition('api-extractor', () => !argv().min), 'build-codepen-examples')
      )
    )
  )
);

task('build-commonjs-only', series('clean', 'ts:commonjs-only'));
task('code-style', series('prettier', 'tslint'));
task('update-api', series('clean', 'copy', 'sass', 'ts', 'update-api'));

// Utility functions

function getPackage() {
  if (typeof packageJson !== 'undefined') {
    return packageJson;
  }

  let packagePath = path.resolve(process.cwd(), 'package.json');

  if (fs.existsSync(packagePath)) {
    packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    return packageJson;
  }

  return undefined;
}

function getDisabledTasks() {
  return getPackage().disabledTasks || [];
}

function kebabCase(name) {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

function registerTask(name, taskFunction) {
  const disabledTasks = getDisabledTasks();

  task(
    name,
    disabledTasks.includes(name)
      ? () => {
          logger.info(`${name} task is disabled in package.json`);
        }
      : taskFunction
  );
}
