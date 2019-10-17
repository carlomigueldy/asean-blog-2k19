import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import about from './views/about.vue'
import sustainable_actions from './views/posts/sustainable_actions'
import two from './views/posts/two'
import three from './views/posts/three'

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
      path: '/posts/sustainable-actions',
      name: 'sustainable_actions',
      component: sustainable_actions,
    },
    {
      path: '/posts/post-two',
      name: 'two',
      component: two,
    },
    {
      path: '/posts/post-three',
      name: 'three',
      component: three,
    },
  ]
})
