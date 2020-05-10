const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin');
const Dotenv = require('dotenv-webpack');

const SRC_PATH = path.resolve(__dirname, 'src', 'App');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const HTML_SRC = path.resolve(SRC_PATH, 'index.html');

const analyze = process.env.ANALYZE || false;
const bundleAnalyzerToken = process.env.BUNDLE_ANALYZER_TOKEN || false;

const config = {
  entry: {
    main: SRC_PATH,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.gql', '.graphql'],
    modules: [SRC_PATH, NODE_MODULES_PATH],
    alias: {
      '@app': path.resolve(SRC_PATH),
      '@utils': path.resolve(SRC_PATH, 'utils'),
      '@assets': path.resolve(SRC_PATH, 'assets'),
      '@hooks': path.resolve(SRC_PATH, 'hooks'),
      '@contexts': path.resolve(SRC_PATH, 'contexts'),
      '@components': path.resolve(SRC_PATH, 'components'),
      '@queries': path.resolve(SRC_PATH, 'schema', 'queries', '__generated__'),
      '@schema': path.resolve(SRC_PATH, 'schema'),
      '@styles': path.resolve(SRC_PATH, 'styles'),
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: 200 * 1000, // 100kb max size
      maxInitialRequests: Infinity,
      maxAsyncRequests: Infinity,
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(\.test.ts$|node_modules)/,
        include: SRC_PATH,
        loader: 'babel-loader',
      },
      { test: /\.(graphql|gql)$/, use: 'graphql-tag/loader', exclude: /node_modules/ },
      { test: /\.svg$/, include: [SRC_PATH], loader: 'svg-react-loader' },
      {
        test: /\.(ico|png|jpg|gif|eot|ttf|woff|woff2)(\?.+)?$/,
        include: [SRC_PATH],
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
    }),
    new HtmlWebpackPlugin({
      template: HTML_SRC,
      inject: 'body',
      chunksSortMode: 'auto',
      minify: { removeRedundantAttributes: true },
    }),
  ],
};

if (analyze) {
  config.plugins.push(new WebpackAnalyzerPlugin());
}
if (bundleAnalyzerToken) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
