export default () => {
  const element = document.createElement('h2');

  element.textContent = 'hello world';

  element.addEventListener('click', () => {
    alert('hello world');
  });

  return element;
};
