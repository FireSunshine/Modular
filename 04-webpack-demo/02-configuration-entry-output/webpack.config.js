const path = require('path');
module.exports = {
  entry: './src/index.js',

  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出文件夹必须定义为绝对路径
    path: path.join(__dirname, 'dist'), // path.resolve
  },
};
