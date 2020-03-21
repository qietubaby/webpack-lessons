const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath:'images/'
        }
      }
    }]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}