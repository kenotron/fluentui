const { preset, just } = require('@uifabric/build');
const path = require('path');
const { task, series, logger } = just;
const { spawn } = require('child_process');

preset();

task('mocha', () => {
  const mochaCmd = require.resolve('mocha/bin/mocha');
  logger.info(`Executing: ${mochaCmd} dist/ssr-test.js`);
  return spawn(mochaCmd, ['dist/ssr-tests.js'], { stdio: 'inherit' });
});

task('build', series('webpack', 'mocha')).cached();
