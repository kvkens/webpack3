const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer : {
    contentBase : "dist",
    hot: true
  },
  entry: {
    vendor: ["react", "react-dom"],
    app: "./index.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve : {
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/')
    }
  },
  module: {
    rules : [{
      test : /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use : [
        "babel-loader"
      ]
    },{
      test : /\.css$/,
      use : [
        "style-loader",
        "css-loader"
      ]
    },{
      test : /\.(png|svg|jpg|gif)$/,
      use : [
        "file-loader"
      ]
    },{
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use : [
        "file-loader"
      ]
    }]
  },
  plugins : [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress : false
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template : "./index.html",
      inject : "body",
      hash : true
    })
  ]
};
