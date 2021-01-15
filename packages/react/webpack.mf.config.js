const path = require('path');
const webpack = require('webpack');
const { webpackMerge } = require('just-scripts');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let baseConfig = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: false,
  entry: undefined,
  mode: 'development',
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
};

const shared = {
  react: { singleton: true },
  'react-dom': { singleton: true },
  '@fluentui/utilities': { singleton: true },
  '@fluentui/theme': { singleton: true },
  '@fluentui/merge-styles': { singleton: true },
  '@fluentui/dom-utilities': { singleton: true },
};

let buttonConfig = webpackMerge(baseConfig, {
  output: {
    path: path.join(__dirname, 'dist/button'),
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'fluentuiReactButton',
      filename: 'remoteEntry.js',
      exposes: {
        '.': '@fluentui/react-internal/src/compat/components/Button',
      },
      shared,
    }),
  ],
});

let labelConfig = webpackMerge(baseConfig, {
  output: {
    path: path.join(__dirname, 'dist/label'),
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'fluentuiReactLabel',
      filename: 'remoteEntry.js',
      exposes: {
        '.': '@fluentui/react-internal/src/components/Label',
      },
      shared,
    }),
  ],
});

let breadcrumbConfig = webpackMerge(baseConfig, {
  output: {
    path: path.join(__dirname, 'dist/breadcrumb'),
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.container.ModuleFederationPlugin({
      name: 'fluentuiReactBreadcrumb',
      filename: 'remoteEntry.js',
      exposes: {
        '.': '@fluentui/react/src/Breadcrumb',
        '@fluentui/react-internal/lib/compat/Button': 'fluentuiReact/lib/compat/Button',
      },
      remotes: {
        fluentuiReact: 'fluentuiReact@http://localhost:2345/remoteEntry.js',
      },
      shared,
    }),
  ],
});

let metaConfig = webpackMerge(baseConfig, {
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'fluentuiReact',
      filename: 'remoteEntry.js',
      exposes: {
        './lib/compat/Button': 'fluentuiRemote/Button',
        './lib/Label': 'fluentuiRemote/Label',
        './lib/Breadcrumb': 'fluentuiRemote/Breadcrumb',
      },
      remotes: {
        'fluentuiRemote/Button': 'fluentuiReactButton@http://localhost:2345/button/remoteEntry.js',
        'fluentuiRemote/Label': 'fluentuiReactLabel@http://localhost:2345/label/remoteEntry.js',
        'fluentuiRemote/Breadcrumb': 'fluentuiReactBreadcrumb@http://localhost:2345/breadcrumb/remoteEntry.js',
      },
      shared,
    }),
  ],
});

module.exports = [buttonConfig, labelConfig, breadcrumbConfig, metaConfig];
