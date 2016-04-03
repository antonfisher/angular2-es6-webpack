'use strict'

var path = require('path')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    // app: ['webpack/hot/dev-server', './src/app.js']
    app: './src/app.js'
  },
  output: {
    // path for all production files
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: [
          ['transform-decorators-legacy']
        ]
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')
    }],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    // concatinate all css files
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    // create index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      title: 'Application'
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    stats: true
  }
}
