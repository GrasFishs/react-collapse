const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'inlin-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true,
    compress:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '周末作业2'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.[hash:8].css',
      chunkFilename: '[id].css'
    }),
  ],
  module: {
    rules: [{
      test: /(\.js$)/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          plugins: ['react-hot-loader/babel'],
        }
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
