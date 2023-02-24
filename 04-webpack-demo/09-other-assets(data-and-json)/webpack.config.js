const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/* JSON 模块 parser */
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

// 获取处理样式的Loaders
function getStyleLoaders(preProcessor) {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'postcss-preset-env', // 能解决大多数样式兼容性问题
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
}

module.exports = {
  /* 入口 */
  entry: './src/index.js',

  /* 输出 */
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出文件夹必须定义为绝对路径
    path: path.resolve(__dirname, 'dist'), // path.resolve
    // 打包前清理 dist 文件夹
    clean: true,
  },

  /* 开发模式 */
  mode: 'development',

  /* 在开发模式下追踪代码 */
  devtool: 'inline-source-map',

  /* 开发服务器 */
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '8000', // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    static: './dist', // 执行目录
  },

  /* 加载器 */
  module: {
    rules: [
      // css loader
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左 use: ['style-loader', 'css-loader'],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // 开启css模块
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env', // 能解决大多数样式兼容性问题
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders('sass-loader'),
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders('stylus-loader'),
      },
      // 图片 资源
      {
        test: /\.(png|jpe?g|gif|webpp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 16 * 1024, // 小于16kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: 'static/imgs/[hash:8][ext][query]',
        },
      },
      // 其他 资源
      {
        test: /\.(ttf|woff2?|map4|map3|avi)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[hash:9][ext][query]',
        },
      },
      // 数据模块
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.(xml)$/,
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },

  /* 插件 */
  plugins: [
    /* 实例化 html-webpack-plugin 插件 */
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
    /* 提取css文件 */
    new MiniCssExtractPlugin({
      filename: 'static/style/main.css',
    }),
    /* 压缩CSS */
    new CssMinimizerPlugin(),
  ],
};
