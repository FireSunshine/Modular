import createHeading from './heading';
import style from '../style/css/index.css';
import '../style/less/index.less';
import '../style/sass/index.sass';
import '../style/sass/index.scss';
import '../style/stylus/index.styl';
import welcome from '../images/welcome.jpg';
import '../style/css/iconfont.css';
// 数据模块
import Data from '../file/data.xml';
import Notes from '../file/data.csv';
// json
import toml from '../file/data.toml';
import yaml from '../file/data.yaml';
import json5 from '../file/data.json5';

const heading = createHeading();
document.body.append(heading);

// 图片
const img = document.createElement('img');
img.src = welcome;
document.body.append(img);

// 样式模块， 避免冲突
const box1 = document.getElementById('box1');
box1.classList.add(style.box1);

// 数据模块
// console.log(Data);
// console.log(Notes);

// json
// console.log(toml.title);
// console.log(toml.owner.name);
// console.log(yaml.title);
// console.log(yaml.owner.name);
// console.log(json5.title);
// console.log(json5.owner.name);

// server
fetch('/api/hello').then((response) => response.text());
// .then((result) => console.log(result));
