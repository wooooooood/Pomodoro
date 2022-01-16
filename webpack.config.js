const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = "development";
module.exports = () => {
  return {
    mode,
    entry: {
      main: "./src/index.tsx",
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "dist"),
      publicPath: "/",
      assetModuleFilename: "images/[hash][ext][query]",
    },
    plugins: [
      new webpack.DefinePlugin({}),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        favicon: "./public/favicon.ico",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader", "css-loader", 'postcss-loader'
          ],
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.(png|jpg)$/,
          type: "asset/resource",
        },
        {
          test: /\.(svg)$/,
          type: "asset/inline",
        },
      ],
    },
    devServer: {
      host: "localhost",
      port: 8080,
      open: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".json"],
      alias: {
        
      },
    },
  };
};
