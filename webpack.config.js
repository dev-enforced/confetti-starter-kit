const commonWebpackConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");

const originalWebpackConfig = merge(commonWebpackConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
});

module.exports = originalWebpackConfig;
