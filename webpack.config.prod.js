const path = require('path');
const webpack = require('webpack');
const bourbon = require('node-bourbon').includePaths;
const S3Plugin = require('webpack-s3-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const s3config = require('./s3config.json');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    /**
     * This plugin assigns the module and chunk ids by occurence count. What this
     * means is that frequently used IDs will get lower/shorter IDs - so they become
     * more predictable.
     */
    new webpack.optimize.OccurenceOrderPlugin(),
    /**
     * See description in 'webpack.config.dev' for more info.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    /**
     * Some of you might recognize this! It minimizes all your JS output of chunks.
     * Loaders are switched into a minmizing mode. Obviously, you'd only want to run
     * your production code through this!
     */
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   }
    // }),

    // new HtmlWebpackPlugin({
    //   template: './default_index.ejs',
    //   inject: 'body'
    // }),

    new S3Plugin({
      // Exclude uploading of html 
      exclude: /.*\.htmlNOT$/,
      // s3Options are required 
      s3Options: {
        accessKeyId: s3config.access,
        secretAccessKey: s3config.secret,
        region: 'us-west-2'
      },
      s3UploadOptions: {
        Bucket: 'static.rachelrosefigura.com',
        ACL: 'public-read'
      },
      cdnizerOptions: {
        defaultCDNBase: 'http://static.rachelrosefigura.com'
      }
    })

  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /(\.scss$|\.css$)/,
        loader: 'style!css!sass?includePaths[]=' + bourbon
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
