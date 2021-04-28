const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new Dotenv({
      path: "./.env.development", // load this now instead of the ones in '.env'
    }),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Giucari"),
    }),
  ],
};
