import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import about from './views/about.vue'
import one from './views/posts/one'
import two from './views/posts/two'

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
    },
    {
      path: '/posts/6-sustainable-actions-to-fight-climate-change',
      name: 'one',
      component: one,
    },
    {
      path: '/posts/teaching-youth-about-climate-change',
      name: 'two',
      component: two,
    },
  ]
})
