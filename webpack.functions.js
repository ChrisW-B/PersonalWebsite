const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src', 'App');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const HTML_SRC = path.resolve(SRC_PATH, 'index.html');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.gql', '.graphql'],
    modules: [SRC_PATH, NODE_MODULES_PATH],
    alias: {
      '@components': path.resolve(SRC_PATH, 'components'),
      '@queries': path.resolve(SRC_PATH, 'queries'),
      '@styles': path.resolve(SRC_PATH, 'styles'),
      '@public': path.resolve(SRC_PATH, 'public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      { test: /\.(graphql|gql)$/, use: 'graphql-mini-transforms/webpack', exclude: /node_modules/ },
      { test: /\.svg$/, include: [SRC_PATH], loader: 'svg-react-loader' },
      {
        test: /\.(ico|png|jpg|gif|eot|ttf|woff|woff2)(\?.+)?$/,
        include: [SRC_PATH],
        loader: 'file-loader',
        options: { name: '[path][name].[hash].[ext]' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_SRC,
      inject: 'body',
      chunksSortMode: 'auto',
      minify: { removeRedundantAttributes: true },
    }),
  ],
};

module.exports = config;
