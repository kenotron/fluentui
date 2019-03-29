const path = require('path');
const fs = require('fs');
const PacktrackerPlugin = require('@packtracker/webpack-plugin');
const resources = require('../../scripts/webpack/webpack-resources');

// Files which should not be considered top-level entries.
const TopLevelEntryFileExclusions = ['index.js', 'version.js', 'index.bundle.js'];

const Entries = _buildEntries('office-ui-fabric-react');

module.exports = Object.keys(Entries).map(
  entryName =>
    resources.createConfig(
      entryName,
      true,
      {
        entry: {
          [entryName]: Entries[entryName]
        },
        externals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        plugins: [
          new PacktrackerPlugin({
            project_token: '27d54348-c333-4d3d-8505-c3a0a8a2d30f',
            upload: true,
            fail_build: true
          })
        ]
        // plugins: [
        //   {
        //     apply: compiler => {
        //       compiler.hooks.afterEmit.tap('AfterEmitPlugin', compilation => _copyStats('office-ui-fabric-react'));
        //     }
        //   }
        // ]
      },
      true,
      true
    )[0]
);

/**
 * Copy the stats file to dist folder the package the bundles were generated from.
 */
// function _copyStats(packageName) {
//   try {
//     fs.copyFileSync(
//       path.join(__dirname, 'dist/test-bundles.stats.html'),
//       path.resolve(__dirname, `../../packages/${packageName}/dist/${StatsFileName}.stats.html`)
//     );
//   } catch (e) {
//     console.log(e);
//   }
// }

/**
 * Build webpack entries based on top level imports available in a package.
 */
function _buildEntries(packageName) {
  const entries = {};
  let packagePath = '';

  try {
    packagePath = path.dirname(require.resolve(packageName)).replace('lib-commonjs', 'lib');
  } catch (e) {
    console.log(`The package "${packageName}" could not be resolved. Add it as a dependency to this project.`);
    console.log(e);
    return;
  }

  fs.readdirSync(packagePath).forEach(itemName => {
    const isJavascriptFile = itemName.match(/.js$/);
    const isAllowedFile = TopLevelEntryFileExclusions.indexOf(itemName) === -1;

    if (isJavascriptFile && isAllowedFile) {
      const entryName = itemName.replace(/.js$/, '');

      // Replace commonjs paths with lib paths.
      const entryPath = path.join(packagePath, itemName);

      entries[`${packageName}-${entryName}`] = entryPath;
    }
  });

  return entries;
}
