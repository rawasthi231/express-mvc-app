const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./resources/index.tsx",
  target: "node",
  externals: [nodeExternals()],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".ejs"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js"),
  },
};
