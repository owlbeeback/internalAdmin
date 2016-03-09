var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  watch: true,
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  module: {
    loaders: [
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.html$/,
            loader: "raw-loader"
        }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

