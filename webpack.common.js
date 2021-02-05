const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

const SRC_PATH = path.resolve(__dirname, 'src', 'App');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const HTML_SRC = path.resolve(SRC_PATH, 'index.html');

const analyze = process.env.ANALYZE || false;

const config = {
  entry: { main: SRC_PATH },
  devtool: 'cheap-module-source-map',
  output: { path: path.resolve(__dirname, 'build') },
  cache: { type: 'filesystem', buildDependencies: { config: [__filename] } },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [SRC_PATH, NODE_MODULES_PATH],
    fallback: { path: require.resolve('path-browserify') },
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
        test: /\.(j|t)sx?$/i,
        exclude: /(\.test.tsx?$|node_modules)/i,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
      },
      { test: /\.svg$/, loader: 'svg-react-loader' },
      {
        test: /\.(ico|png|jpg|gif|eot|ttf|woff|woff2)(\?.+)?$/,
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

module.exports = config;
