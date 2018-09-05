import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from './views/Home.vue'
import qrcode from './views/qrcode.vue'
import emoji from './views/emoji.vue'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: qrcode
    },
    {
      path: '/emoji',
      name: 'emoji',
      component: emoji
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
  next()
})
export default router
