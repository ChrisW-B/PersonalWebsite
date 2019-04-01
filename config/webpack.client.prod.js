const CompressionPlugin = require(`compression-webpack-plugin`);
const ManifestPlugin = require(`webpack-manifest-plugin`);
const WebpackChunkHash = require(`webpack-chunk-hash`);
const path = require(`path`);
const merge = require(`webpack-merge`);
const common = require(`./webpack.common`);

const BuildDir = path.resolve(__dirname, `..`, `public`, `build`, `client`);
const AppDir = path.resolve(__dirname, `..`, `client`);

const CompressionConfig = {
  // path: `[path].gz[query]`,
  test: /\.js$|\.css$|\.html$/
  // threshold: 10240,
  // minRatio: 0,
};
const WebpackPlugins = [
  new ManifestPlugin({
    publicPath: ``
  }),
  new CompressionPlugin(CompressionConfig),
  new WebpackChunkHash()
];

module.exports = merge.smart(common, {
  entry: { app: [`${AppDir}/index`] },
  output: {
    path: BuildDir,
    publicPath: `/build/`,
    filename: `[name].[chunkhash].js`,
    chunkFilename: `[name].[chunkhash].js`
  },
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
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
});
