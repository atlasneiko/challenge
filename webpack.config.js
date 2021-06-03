const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,

  entry: {
    index: path.resolve(__dirname, './public', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, './public_build'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      favicon: './public/favicon.png',

      filename: './index.html',
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
};
