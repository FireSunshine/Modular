// CommonJS 模块始终只会导出一个默认成员
// module.exports = {
//   foo: 'commonjs exports vaules',
// };

exports.foo = 'commonjs exports vaules';

// 不能在 CommonJS 模块中通过 require 载入 ES Module
// const mod = require('./es-module.mjs');
// console.log(mod);
