const webpack = require('webpack')
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-moudle-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

}

module.exports = merge(commonConfig, devConfig)