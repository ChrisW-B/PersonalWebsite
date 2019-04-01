const webpack = require(`webpack`);
const FriendlyErrorsWebpackPlugin = require(`friendly-errors-webpack-plugin`);
const merge = require(`webpack-merge`);
const path = require(`path`);
const common = require(`./webpack.common`);

const AppDir = path.resolve(__dirname, `..`, `client`);

module.exports = merge.smart(common, {
  entry: { app: [`webpack-hot-middleware/client`, `${AppDir}/index`] },
  devtool: `cheap-module-source-map`,
  mode: `development`,
  plugins: [new webpack.HotModuleReplacementPlugin(), new FriendlyErrorsWebpackPlugin()],
  module: {
    rules: [
      {
        enforce: `pre`,
        test: /\.js$/,
        exclude: /node_modules/,
        loader: `eslint-loader`
      },
      {
        enforce: `pre`,
        test: /\.js$/,
        exclude: /node_modules/,
        loader: `stylelint-custom-processor-loader`
      }
    ]
  }
});
