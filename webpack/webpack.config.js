const path = require("path");
const outputConfig = require("./output.config.js");
const resolveConfig = require("./resolve.config.js");
const moduleConfig = require("./module.config.js");
const pluginsConfig = require("./plugins.config.js");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // entry: "./src/index_tree_shaking.js",
  output: outputConfig,
  resolve: resolveConfig,
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    usedExports: true,
    minimizer: [new UglifyJsPlugin()]
  },
  devtool: process.NODE_ENV === "development" ? "eval-source-map" : "",
  module: moduleConfig,
  plugins: pluginsConfig
};

// const path = require("path");
// // const resolveConfig = require("./resolve.config.js");
// // const outputConfig = require("./output.config.js");
// // // const moduleConfig = require("./module.config.js");
// // const pluginsConfig = require("./plugins.config.js");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
//
// module.exports = {
//   entry: path.resolve(__dirname, "../", "src", "index.js"),
//   output: {
//     chunkFilename: "[name].[hash].bundle.js",
//     filename: "[name].[hash].bundle.js",
//     path: path.resolve(__dirname, "build")
//   },
//   resolve: {
//     alias: {
//       hoc: path.resolve(__dirname, "../src/hoc/"),
//       components: path.resolve(__dirname, "../src/components/"),
//       utils: path.resolve(__dirname, "../src/utils/")
//     }
//   },
//   mode: "development",
//   optimization: {
//     splitChunks: {
//       chunks: "all"
//     },
//     usedExports: true
//   },
//   devtool: "eval-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader"
//           }
//         ]
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // fallback to style-loader in development
//           // process.env.NODE_ENV !== "production"
//           //   ? "style-loader"
//           //   : MiniCssExtractPlugin.loader,
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           "sass-loader"
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./src/index.html",
//       filename: "./index.html"
//     }),
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: "[name].[hash].css",
//       chunkFilename: "[id].[hash].css"
//     })
//   ]
// };
