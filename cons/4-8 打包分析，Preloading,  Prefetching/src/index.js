document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */'./click.js').then(({default:func}) => {
    func()
  })
})






// 异步 可以实现懒加载
// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['aa', 'ccc'], '_')
//     return element
//   })
// }





// async function getComponent() {
//   const { default:_ } = await import(/* webpackChunkName:"lodash" */'lodash')
  
//   var element = document.createElement('div');
//   element.innerHTML = _.join(['aa', 'ccc'], '_')
//   return element
  
// }

// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element)
//   })
// })









// //同步
// import _ from 'lodash'

// var element = document.createElement('div')
// element.innerHTML = _.join(['Dell','Lee'],'_')
// document.body.appendChild(element)



