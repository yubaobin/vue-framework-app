import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from '@/store'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.name && to.path === '/') {
    store.dispatch('animSwitch', {
      animtype: 'right'
    })
  } else {
    store.dispatch('animSwitch', {
      animtype: 'left'
    })
  }
})
export default router
