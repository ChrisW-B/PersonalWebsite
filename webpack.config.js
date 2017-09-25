const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'public/build');
const APP_DIR = path.resolve(__dirname, 'react');

module.exports = {
  entry: {
    app: ['babel-polyfill', `${APP_DIR}/index`]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.DefinePlugin({ ENV: JSON.stringify('production') }),
    new MinifyPlugin({
      removeConsole: true,
      removeDebugger: true
    }, { comments: false, sourceMap: false }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { targets: { browsers: ['last 2 versions'] } }], 'react'
          ],
          plugins: [
            'transform-object-rest-spread', 'transform-export-extensions', 'transform-class-properties', ['transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]
          ]
        }
      }]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('postcss-smart-import')(), // eslint-disable-line global-require
            require('precss')(), // eslint-disable-line global-require
            require('autoprefixer')() // eslint-disable-line global-require
          ]
        }
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.json?$/,
      loader: 'json-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!autoprefixer?browsers=last 2 versions'
    }, {
      test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      exclude: /node_modules/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }, {
      test: /\.(png|jpg)$/,
      exclude: /node_modules/,
      loader: 'file-loader?name=images/[name].[ext]'
    }]
  }
};