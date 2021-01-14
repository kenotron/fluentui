// @ts-check
const resources = require('../../scripts/webpack/webpack-resources');
const webpack = require('webpack');
const { webpackMerge } = require('just-scripts');

const BUNDLE_NAME = 'fluentui-react';

let config = resources.createConfig(BUNDLE_NAME, false, {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.tsx?$/],
        use: {
          loader: 'ts-loader',
          options: {
            experimentalWatchApi: true,
            transpileOnly: true,
          },
        },
        exclude: [/node_modules/, /\.scss.ts$/, /\.test.tsx?$/],
      },
      {
        test: /\.scss$/,
        enforce: 'pre',
        exclude: [/node_modules/],
        use: [
          {
            loader: '@microsoft/loader-load-themed-styles', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              esModule: false,
              modules: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  // @ts-ignore
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'fluentuiReact',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
      },
    }),
  ],
  output: {
    filename: `${BUNDLE_NAME}.mf.js`,
  },
})[0];

delete config.entry;

module.exports = config;
