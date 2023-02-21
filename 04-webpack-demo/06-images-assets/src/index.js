import createHeading from './heading';
import '../style/css/index.css';
import '../style/less/index.less';
import '../style/sass/index.sass';
import '../style/sass/index.scss';
import '../style/stylus/index.styl';
import welcome from '../images/welcome.jpg';
const heading = createHeading();

document.body.append(heading);

const img = document.createElement('img');
img.src = welcome;
document.body.append(img);
