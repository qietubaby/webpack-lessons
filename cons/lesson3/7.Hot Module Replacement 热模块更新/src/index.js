/*  devServer首先开启热更新
      devServer: {
      hot: true,
      hotOnly: true
    }
    
    然后添加webpack插件 webpack.HotModuleReplacementPlugin
*/

// 这个例子表明：当样式方式改变的时候，如果开启了热更新  不会影响用js生成的item
/* import './style.css';
var btn = document.createElement('button')
btn.innerHTML = '新增'
document.body.appendChild(btn)

btn.onclick = function() {
  var div = document.createElement('div')
  div.innerHTML = 'item'
  document.body.appendChild(div)
} 
*/







// 如果开启了模块热更新 number.js模块发生改变 不会影响counter已经在页面上产生的结果 便于调试
import counter from './counter'
import number from './number'

counter()
number()

/*
目的就是 number发生变化的时候 不要影响counter计数器
*/
// 当number发生变化的时候
if(module.hot) {
  module.hot.accept('./number',() => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}