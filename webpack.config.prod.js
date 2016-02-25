
var webpack               = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin     = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin     = require('html-webpack-plugin');
var path                  = require("path");
const bourbon             = require('node-bourbon').includePaths;


var publicPath = '/';
var devServer;
if (process.env.WEBPACK_DEV_SERVER) {
  publicPath = '';
  devServer = {
    proxy: {
      "/api/*": "http://teach.classdojo.dev:8000",
      "/locales/*": "http://teach.classdojo.dev:8000"
    },
    contentBase: "./build/prod_build"
  };
}

var webpackConfig = {
  entry: {
    app: [
      './src/index.js'
    ]//,
    //vendor: './src/vendors/index.js'
  },
  output: {
    path: './build/prod_build',
    filename: 'app.bundle-[hash].js',
    publicPath: publicPath
  },
  devServer: devServer,
  module: {
    loaders: [
      // IMPORTANT: we don't want to process EVERY single JS file with babel
      // loader. We only want to process the files inside our app structure
      // otherwise this could get very slow or even fail.
      {test: /\.jsx?$/, include: [/\/src\//], exclude: [/\/node_modules\//, /\/styles\//], loader: 'babel'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {
        test: /(\.scss$|\.css$)/,
        loader: 'style!css!sass?includePaths[]=' + bourbon
      },
      {test: /\.png/,   loader: 'file-loader?mimetype=image/png'},
      {test: /\.jpg/,   loader: 'file'},
      {test: /\.gif/,   loader: 'file'},
      {test: /\.mp3/,   loader: 'file'},
      {test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,         loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "file-loader"}
    ]
  },
  resolve: {
    // Needed so you can require('a') instead of require('a.jsx')
    extensions: ['', '.js', '.jsx', '.json', '.styl'],

    // Lets make sure only ONE version of react gets bundled and used/
    // If any dependency has an internal version of react in its node modules
    // is gonna be ignored and this one will be used (unless that dependency
    // is being used through a bundle and not consumed through common js)
    alias: {
      react: path.join(__dirname, 'node_modules/react')
    }

  },
  plugins: [
    new ExtractTextPlugin("app.bundle-[hash].css", {allChunks: true}),
    new WebpackNotifierPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle-[hash].js', minChunks: Infinity}),
    new HtmlWebpackPlugin({
      template: './src/assets/index.template.html'
    }),
    new webpack.DefinePlugin({
      __ENV__: {},
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};


module.exports = webpackConfig;