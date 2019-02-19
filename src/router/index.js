import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue')
const qrcode = () => import('@/views/qrcode.vue')
const emoji = () => import('@/views/emoji.vue')

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  // base: `/${process.env.VUE_APP_outputDir}`,
  routes: [{
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      auth: false
    },
    component: Home
  }, {
    path: '/qrcode',
    name: 'qrcode',
    meta: {
      title: '二维码',
      auth: false
    },
    component: qrcode
  }, {
    path: '/emoji',
    name: 'emoji',
    meta: {
      title: '表情包',
      auth: false
    },
    component: emoji
  }]
})

export default router
