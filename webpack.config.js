const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"], // bundle's entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // build
    publicPath: 'auto',
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        issuer: /\.scss?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api/v1": {
        target: "https://localhost:3000/api",
        secure: false,
      },
    },
  },
};
