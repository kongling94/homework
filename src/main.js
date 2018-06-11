// ES6语法解析
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import vueLazyLoad from 'vue-lazyload'

// import 'common/border.css'
import 'stylus/index.styl'

Vue.config.productionTip = false

// 图片懒加载
Vue.use(vueLazyLoad, {
  // 加载前用于显示的图片
  error: require('./assets/images/common/porduct-noshow.jpg'),
  loading: require('./assets/images/common/porduct-noshow.jpg')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
