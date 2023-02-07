// export var name = 'sunshine';
// export function hello() {
//   console.log(hello);
// }
// export class Person {}

var name = 'sunshine';

function hello() {
  console.log('hello');
}

class Person {}

export { name as Tname, hello as Thello, Person as Tperson };
// export default name;
