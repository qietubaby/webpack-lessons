const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool:'cheap-moudle-eval-source-map',
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase:'./dist',
    open: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },

      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader'
        }
      },

      {
        test: /\.scss$/,
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
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),new CleanWebpackPlugin()],
  output: {
    publicPath: '/',
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  }
}
