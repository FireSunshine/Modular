import { lowercase } from './utils'
import { lowercase } from './utils/index.js'

// --------------

import {} from './module.js';
import './module.js';

// ---------------

import * as mod from './module.js';

// ---------------

var modulePath = './module.js'
import { name } from modulePath

// if (true) {
//   // 导入声明只能在模块的顶层使用。
//   import { name } from './module.js'
// }

import('./module.js').then(function (module) {
  console.log(module)
})

// ----------------

// import { name, age, default as title } from './module.js'
import abc, { name, age } from './module.js'
console.log(name, age, abc)