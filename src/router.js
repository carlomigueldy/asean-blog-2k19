import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import about from './views/about.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    }
  ]
})
