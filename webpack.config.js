const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'none',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3005',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [
      'node_modules',
      path.join(process.cwd(), 'src')
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
};
