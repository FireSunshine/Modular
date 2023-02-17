const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出文件夹必须定义为绝对路径
    path: path.join(__dirname, 'dist'), // path.resolve
    // 打包前清理 dist 文件夹
    clean: true,
  },

  plugins: [
    // 实例化 html-webpack-plugin 插件
    new HtmlWebpackPlugin({
      template: './index.html', // 打包生成的文件的模板
      filename: 'app.html', // 打包生成的文件名称。默认为index.html
      inject: 'body', // 设置所有资源文件注入模板的位置。可以设置的值
      // 可以取到值 <h1><%= htmlWebpackPlugin.options.title %></h1>
      title: 'Webpack Plugin Sample',
      meta: {
        viewport: 'width=device-width',
      },
    }),
  ],
};
