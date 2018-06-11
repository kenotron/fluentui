let { createConfig } = require('../../scripts/tasks/jest-resources');
let path = require('path');

const config = createConfig({
  setupFiles: [path.resolve(path.join(__dirname, 'config', 'tests.js'))],

  moduleNameMapper: {
    // These mappings allow Jest to run snapshot tests against Example files
    'office-ui-fabric-react/lib/(.*)': '<rootDir>/src/$1',
    '@uifabric/example-app-base': '@uifabric/example-app-base/lib-commonjs/utilities/data'
  },

  snapshotSerializers: [require.resolve('@uifabric/jest-serializer-merge-styles')]
});

module.exports = config;
