import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import wiki from 'views/Wiki/wiki'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wiki',
      component: wiki
    }
  ]
})
