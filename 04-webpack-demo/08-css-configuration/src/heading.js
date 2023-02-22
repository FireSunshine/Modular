import style from '../style/css/index.css';
export default () => {
  const element = document.createElement('h2');

  element.textContent = 'hello world';

  element.classList.add(style.box);

  element.addEventListener('click', () => {
    alert('hello world');
    // hello();
  });

  return element;
};
