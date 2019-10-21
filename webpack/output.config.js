const path = require("path");

const output = {
  chunkFilename: "[name].[chunkhash].bundle.js",
  filename: "[name].[chunkhash].bundle.js",
  path: path.resolve(__dirname, "build")
};

module.exports = output;
