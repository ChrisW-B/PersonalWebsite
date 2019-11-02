const merge = require('webpack-merge');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const commonConfig = require('./webpack.common.js');

const mode = process.env.NODE_ENV || 'production';

const config = merge(commonConfig, {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
  },
  externals: [{ react: 'React' }, { 'react-dom': 'ReactDOM' }],
  devtool: 'source-map',
  mode,
  plugins: [
    new WebpackCdnPlugin({
      modules: {
        react: [
          { name: 'react', var: 'React', path: `umd/react.${mode}.min.js` },
          { name: 'react-dom', var: 'ReactDOM', path: `umd/react-dom.${mode}.min.js` },
        ],
      },
      prod: mode,
      publicPath: '/node_modules',
    }),
  ],
});

module.exports = config;
