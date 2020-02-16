const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src', 'App');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const HTML_SRC = path.resolve(SRC_PATH, 'index.html');

const config = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
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
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(\.test.ts$|node_modules)/,
        include: SRC_PATH,
        loader: 'babel-loader',
      },
      { test: /\.(graphql|gql)$/, use: 'graphql-tag/loader', exclude: /node_modules/ },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
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
    new HtmlWebpackPlugin({
      template: HTML_SRC,
      inject: 'body',
      chunksSortMode: 'auto',
      minify: { removeRedundantAttributes: true },
    }),
  ],
};

module.exports = config;
