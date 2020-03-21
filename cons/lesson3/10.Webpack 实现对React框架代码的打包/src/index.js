// 最新的webpakc  如果配置了useBuiltIns 可以不用加这句import "@babel/polyfill"
// import "@babel/polyfill"

import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return <div>Hello Word</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));