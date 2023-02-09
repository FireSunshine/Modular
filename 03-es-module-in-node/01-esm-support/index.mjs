// 第一，将文件的扩展名由 .js 改为 .mjs；
// 第二，启动时需要额外添加 `--experimental-modules` 参数；

import { foo, bar } from './module.mjs';

console.log(foo, bar);

// 内置模块
import fs from 'fs';
fs.writeFileSync('./foo.txt', 'es moudle working');

// 提取内置模块的成员， 内置兼容 ESM 的成员提取方式
import { writeFileSync } from 'fs';
writeFileSync('./bar.txt', 'es module working');

// 对于第三方的 NPM 模块也可以通过 esm 加载
import _ from 'loadsh';
console.log(_.camelCase('ES Module')); // esModule

// 不支持 因为第三方模块都是默认导出成员
// import { camelCase } from 'loadsh';
// console.log(_.camelCase('ES Module'));
