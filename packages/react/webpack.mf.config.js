const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
// const { webpackMerge } = require('just-scripts');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const shared = {
  react: { singleton: true },
  'react-dom': { singleton: true },
  '@fluentui/react-internal': { singleton: true },
};

const rootComponents = fs
  .readdirSync(path.join(__dirname, 'src'))
  .filter(filename => filename[0].toUpperCase() === filename[0])
  .map(filename => filename.replace(/\.tsx?/, ''));
const rootComponentsExposes = {};
for (const component of rootComponents) {
  rootComponentsExposes[`./lib/${component}`] = `@fluentui/react/lib/${component}`;
}

const metaConfig = {
  output: {},
  entry: './dummy.js',
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    concatenateModules: false,
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'fluentuiReact',
      filename: 'remoteEntry.js',
      exposes: {
        ...rootComponentsExposes,
        './lib/compat/Button': '@fluentui/react/lib/compat/Button',
        '.': '@fluentui/react/lib/index',
      },
      shared,
    }),
  ],
};

module.exports = metaConfig;
