'use strict'
// node自带的文件路径工具
const path = require('path')
// 工具函数集合 utils主要用来处理css-loader和vue-style-loader的
const utils = require('./utils')
// 引入config目录下的index.js配置文件，主要用来定义一些开发和生产环境的属性
const config = require('../config')

const webpack = require('webpack')
// vue-loader.conf配置文件是用来解决各种css文件的，定义了诸如css,less,sass之类的和样式有关的loader
const vueLoaderConfig = require('./vue-loader.conf')

// 获取当前目录的绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  // 根目录
  context: path.resolve(__dirname, '../'),
  entry: {
    // 入口文件是src目录下的main.js
    app: './src/main.js'
  },
  output: {
    // 打包输出：路径是config目录下的index.js中的build配置中的assetsRoot，也就是dist目录
    path: config.build.assetsRoot,
    // 保留原文件名
    filename: '[name].js',
    // 上线地址，也就是真正的文件引用路径，如果是production生产环境，其实这里都是 '/',但是build打包必须将静态文件目录改为绝对路径'./',否则静态资源文件会找不到
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  // resolve是webpack的内置选项
  resolve: {
    // 省略扩展名，也就是说.js,.vue,.json文件导入可以省略后缀名，
    extensions: ['.js', '.vue', '.json'],
    // 文件夹 别名
    alias: {
      // 后面的$符号指精确匹配
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      stylus: resolve('src/assets/stylus'),
      images: resolve('src/assets/images'),
      js: resolve('src/assets/js'),
      views: resolve('src/views'),
      api: resolve('src/api')
    }
  },
  // 插件
  plugins: [
    // 引入JQuery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  // 模板解析
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // 将vueLoaderConfig当做参数传递给vue-loader,就可以解析文件中的css相关文件
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        // 对js文件使用babel-loader转码,该插件是用来解析es6等代码
        loader: 'babel-loader',
        // 指明src和test目录下的js文件要使用该loader
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
