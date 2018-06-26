// ES6语法解析
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import vueLazyLoad from 'vue-lazyload'
// 引入vue-amap
import VueAMap from 'vue-amap'
// ElementUI组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// import 'common/border.css'
import 'stylus/index.styl'
// 引入JQuery
import 'jquery'

Vue.config.productionTip = false

// 图片懒加载
Vue.use(vueLazyLoad, {
  // 加载前用于显示的图片
  error: require('./assets/images/common/porduct-noshow.jpg'),
  loading: require('./assets/images/common/porduct-noshow.jpg')
})
// 挂载elementUI
Vue.use(ElementUI)
Vue.use(VueAMap)
// 将API方法绑定到全局
// Vue.prototype.$api = api
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '3d222a3955ba404bdb4875c88fb7f1a5',
  // 插件集合
  plugin: [
    'AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView',
    'AMap.ToolBar',
    'AMap.MapType',
    'AMap.PolyEditor',
    'AMap.CircleEditor'
  ],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // template: '<App/>',
  // components: {
  //   App
  // }
})
