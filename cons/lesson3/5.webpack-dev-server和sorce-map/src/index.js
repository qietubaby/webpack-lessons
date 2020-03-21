/*
sourceMap 它是一个映射关系，他知道dist目录下main.js实际对应的js哪里出错了
// development devtool: 'cheap-moudle-eval-source-map'
// production devtool: 'cheap-moudle-source-map'
*/

var root = document.getElementById('root');
import './index.scss';
console.log(12345)
root.innerHTML = '<div class="iconfont icon-yueliang"></div>'