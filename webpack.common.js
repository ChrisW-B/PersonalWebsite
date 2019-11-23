const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src', 'App');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const HTML_SRC = path.resolve(SRC_PATH, 'index.html');

const config = {
  entry: { app: [SRC_PATH] },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.gql', '.graphql'],
    modules: [SRC_PATH, NODE_MODULES_PATH],
    alias: {
      '@app': path.resolve(SRC_PATH),
      '@components': path.resolve(SRC_PATH, 'components'),
      '@schema': path.resolve(SRC_PATH, 'schema'),
      '@styles': path.resolve(SRC_PATH, 'styles'),
    },
  },
  // webpack 4 optimization
  // 'all' means both async and initial chunks (whether they're async or classically imported)
  optimization: {
    runtimeChunk: 'single',
    splitChunks: { chunks: 'all', maxInitialRequests: Infinity },
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
    new HtmlWebpackPlugin({
      template: HTML_SRC,
      inject: 'body',
      chunksSortMode: 'auto',
      minify: { removeRedundantAttributes: true },
    }),
  ],
};

module.exports = config;
