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

  // 开发模式
  mode: 'development',

  // 在开发模式下追踪代码
  devtool: 'inline-source-map',

  // 开发服务器
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '8000', // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    static: './dist', // 执行目录
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
