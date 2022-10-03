const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpackConfig = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Confetti Kit Starter",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};

module.exports = webpackConfig;
