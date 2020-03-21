import {a} from './a'
import avatar from './img.png'
import './index.scss'

var img = new Image();
img.src = avatar
img.classList.add('avatar')
var root = document.getElementById('root');
console.log(img, root)
root.append(img);