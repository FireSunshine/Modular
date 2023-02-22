import createHeading from './heading';
import style from '../style/css/index.css';
import '../style/less/index.less';
import '../style/sass/index.sass';
import '../style/sass/index.scss';
import '../style/stylus/index.styl';
import welcome from '../images/welcome.jpg';
import '../style/css/iconfont.css';

const heading = createHeading();
document.body.append(heading);

// 图片
const img = document.createElement('img');
img.src = welcome;
document.body.append(img);

// 样式模块， 避免冲突
const box1 = document.getElementById('box1');
box1.classList.add(style.box1);
