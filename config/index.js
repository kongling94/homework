'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  // 开发环境下的服务端
  dev: {
    // Paths
    assetsSubDirectory: './static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/getWikiPro': {
        target:
          'http://168.168.100.18/t_firefly_cn/public/api/Nav/wiki_products_api', // 接口process.env.API_ROOT +
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': ''
        }
      },
      '/api/getHeader': {
        target:
          'http://168.168.100.18/t_firefly_cn/public/api/Nav/Common_head_nav', // 接口process.env.API_ROOT +
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': ''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map', // 项目调试的方式

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },
  // 生产环境下
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths 目录设置
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './static',
    // proxyTable: {
    //   '/getWikiPro': {
    //     target: 'http://168.168.100.18/api/Nav/wiki_products_api', // 接口process.env.API_ROOT +
    //     // secure: false,  // 如果是https接口，需要配置这个参数
    //     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    //   '/getHeader': {
    //     target: 'http://168.168.100.18/api/Nav/Common_head_nav', // 接口process.env.API_ROOT +
    //     // secure: false,  // 如果是https接口，需要配置这个参数
    //     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
