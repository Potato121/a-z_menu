import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/City/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/city'
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
