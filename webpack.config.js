const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  devServer : {
    contentBase : "dist",
    hot: true
  },
  entry: {
    vendor: ["react", "react-dom"],
    app: "./index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  externals: {
    //"react": "React",
    //"react-dom": "ReactDOM"
  },
  resolve : {
    alias: {
      containers: path.resolve(__dirname, "src/containers/"),
      components: path.resolve(__dirname, "src/components/"),
      assets: path.resolve(__dirname, "src/assets/"),
      routes: path.resolve(__dirname, "src/routes/")
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
      use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","postcss-loader"]
      })
    },{
      test : /\.(png|svg|jpg|gif)$/,
      use : [{
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]"
        }
      }]
    },{
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use : [
        "file-loader"
      ]
    }]
  },
  plugins : [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template : "./index.html",
      inject : "body",
      favicon : "./src/assets/favicon.ico",
      hash : true
    })
  ]
};
