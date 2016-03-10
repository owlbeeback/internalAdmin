var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
module.exports = {
  watch: true,
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/entrypoint.js",
  output: {
    // path: __dirname + "/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
        {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader : 'file-loader'
        },
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

