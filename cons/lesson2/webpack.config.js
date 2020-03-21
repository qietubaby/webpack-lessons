//可以直接运行 npx webpack 打包

// 如果没有配置文件 npx webpack index.js打包
// mode production 会压缩 development不会压缩
const path = require('path')

module.exports = {
  mode:'production',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}