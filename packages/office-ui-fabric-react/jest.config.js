let { createConfig } = require('../../scripts/tasks/jest-resources');
let path = require('path');

const config = createConfig({
  setupFiles: [
    path.resolve(__dirname, 'lib/common/tests.js')
  ],
  snapshotSerializers: [
    require.resolve('@uifabric/jest-serializer-merge-styles')
  ],
});

module.exports = config;