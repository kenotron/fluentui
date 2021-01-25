const fs = require('fs');
const path = require('path');
const glob = require('glob');

const packages = glob.sync('packages/*/package.json');

const skippedPkgs = [
  '@fluentui/react-docsite-components',
  '@fluentui/react-examples',
  '@fluentui/react-monaco-editor',
  '@fluentui/monaco-editor',
];

for (const pkg of packages) {
  const pkgPath = path.dirname(pkg);
  const pkgJson = JSON.parse(fs.readFileSync(pkg, 'utf-8'));
  const tsconfigPath = path.join(pkgPath, 'tsconfig.json');
  const types = pkgJson.types || pkgJson.typings;

  if (
    !skippedPkgs.includes(pkgJson.name) &&
    fs.existsSync(tsconfigPath) &&
    types &&
    fs.existsSync(path.join(pkgPath, types))
  ) {
    const files = glob
      .sync(path.join(pkgPath, 'lib/**/*.d.ts'))
      .concat(glob.sync(path.join(pkgPath, 'dist/**/*.d.ts')))
      .concat(glob.sync(path.join(pkgPath, 'dist/**/*.api.json')));
    files.push(pkg);
    for (const file of files) {
      const dest = path.join(
        '/workspace/fluentui-site/ladingTypes/',
        pkgJson.name,
        file.replace(/packages\/[^/]+/, ''),
      );
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(file, dest);
    }

    console.log('deleting ', path.join('/workspace/fluentui-site/node_modules', pkgJson.name));

    fs.rmdirSync(path.join('/workspace/fluentui-site/node_modules', pkgJson.name), { recursive: true });
  }
}
