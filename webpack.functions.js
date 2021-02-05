const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src', 'server');
const APP_PATH = path.resolve(__dirname, 'src', 'App');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

const config = {
  entry: { server: SRC_PATH, app: APP_PATH },
  target: 'node',
  mode: 'production',
  optimization: { minimize: false },
  output: {
    path: path.resolve(__dirname, 'functions'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    sourceMapFilename: '[name].js.map',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [SRC_PATH, NODE_MODULES_PATH],
    alias: {
      '@utils': path.resolve(APP_PATH, 'utils'),
      '@assets': path.resolve(APP_PATH, 'assets'),
      '@hooks': path.resolve(APP_PATH, 'hooks'),
      '@contexts': path.resolve(APP_PATH, 'contexts'),
      '@components': path.resolve(APP_PATH, 'components'),
      '@queries': path.resolve(APP_PATH, 'schema', 'queries', '__generated__'),
      '@schema': path.resolve(APP_PATH, 'schema'),
      '@styles': path.resolve(APP_PATH, 'styles'),
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
      { test: /\.html$/, loader: 'raw-loader' },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = config;
