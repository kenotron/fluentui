const webpack = require('webpack');
const getResolveAlias = require('@fluentui/scripts/webpack/getResolveAlias');
const resources = require('@fluentui/scripts/webpack/webpack-resources');
const { addMonacoWebpackConfig } = require('@fluentui/react-monaco-editor/scripts/addMonacoWebpackConfig');
const { remoteExternal } = require('@lading/webpack');

const BUNDLE_NAME = 'demo-app';

const cssRule = {
  test: /\.css$/,
  // include: /node_modules/,
  use: ['style-loader', 'css-loader'],
};

const config = resources.createServeConfig({
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: `${BUNDLE_NAME}.js`,
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.container.ModuleFederationPlugin({
      remotes: {
        '@fluentui/react': remoteExternal('fluentuiReact'),
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],

  resolve: {
    alias: getResolveAlias(),
  },
});

module.exports = config;
