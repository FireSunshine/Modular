import createHeading from './heading';
import '../css/index.css';
import '../less/index.less';
import '../sass/index.sass';
import '../sass/index.scss';
import '../stylus/index.styl';

const heading = createHeading();

document.body.append(heading);
