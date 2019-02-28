const CompressionPlugin = require(`compression-webpack-plugin`);
const MinifyPlugin = require(`babel-minify-webpack-plugin`);
const ManifestPlugin = require(`webpack-manifest-plugin`);
const WebpackChunkHash = require(`webpack-chunk-hash`);
const webpack = require(`webpack`);

const {
  BabelPlugins,
  BabelPresets,
  WebpackStatic,
  OutputConfig,
  AppDir,
} = require(`./webpack.common`);

const MinifyConfig = { removeConsole: true, removeDebugger: true };
const CompressionConfig = {
  // path: `[path].gz[query]`,
  test: /\.js$|\.css$|\.html$/,
  // threshold: 10240,
  // minRatio: 0,
};
const WebpackPlugins = [
  new ManifestPlugin({
    publicPath: ``,
  }),
  new webpack.DefinePlugin({ ENV: JSON.stringify(`production`) }),
  new MinifyPlugin(MinifyConfig),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new CompressionPlugin(CompressionConfig),
  new WebpackChunkHash(),
];

const ProdPlugins = [`emotion`, ...BabelPlugins, [`transform-react-remove-prop-types`, { mode: `remove`, removeImport: true }]];

const BabelConfig = {
  test: /\.jsx?$|\.js?$/,
  exclude: /node_modules/,
  use: [{
    loader: `babel-loader`,
    options: { presets: BabelPresets, plugins: ProdPlugins },
  }],
};

module.exports = {
  // devtool: 'source-map',
  mode: `production`,
  entry: { app: [`@babel/polyfill`, `${AppDir}/index`] },
  output: { ...OutputConfig, filename: `[name].[chunkhash].js`, chunkFilename: `[name].[chunkhash].js` },
  plugins: WebpackPlugins,
  optimization: {
    runtimeChunk: `single`,
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `vendors`,
          enforce: true,
          chunks: `all`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: { extensions: [`.js`, `.jsx`, `.json`] },
  module: { rules: [BabelConfig, ...WebpackStatic] },
};