const getResolveAlias = require('@fluentui/scripts/webpack/getResolveAlias');
const resources = require('@fluentui/scripts/webpack/webpack-resources');
const { addMonacoWebpackConfig } = require('@fluentui/react-monaco-editor/scripts/addMonacoWebpackConfig');
const webpack = require('webpack');

const BUNDLE_NAME = 'demo-app';

module.exports = resources.createServeConfig(
  addMonacoWebpackConfig({
    entry: {
      [BUNDLE_NAME]: './src/index.tsx',
    },

    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },

    resolve: {
      alias: getResolveAlias(),
    },

    plugins: [
      new webpack.container.ModuleFederationPlugin({
        remotes: {
          '@fluentui/react/mf': 'fluentui-react-mf@http://localhost:8080/remoteEntry.js',
        },
      }),
    ],
  }),
);
