var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const bourbon = require('node-bourbon').includePaths;


module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: 'style!css!autoprefixer-loader!sass?includePaths[]=' + bourbon },
            { test: /\.css$/, loader: 'style!css!autoprefixer-loader' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.svg$/, loader: 'raw' },
            { test: /\.(svg|jpeg|jpg|png)$/, loader: 'file' }
        ]
    },
    resolveLoader: {
      modulesDirectories: [
              path.join(__dirname,'/node_modules')
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './default_index.template.html'
        })
    ]
}