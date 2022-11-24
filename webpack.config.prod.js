const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.config.common");

const productionWebpackConfig = merge(commonWebpackConfig, {
  devtool: "source-map",
  mode: "production",
});

module.exports = productionWebpackConfig;
