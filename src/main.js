import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './api'
import utils from './utils'
import config from './config'

// 引入mint ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入移动端适配
import 'lib-flexible/flexible.js'
// iconfont
import '@/assets/iconfont/iconfont'
// filter
import filter from './filter'
// mixins
import mixins from './mixins'
// svg组件
import IconSvg from 'components/IconSvg'
Vue.component('icon-svg', IconSvg)

Vue.config.productionTip = false

// 引入Mint ui
Vue.use(Mint)
// api
Vue.use(api)

filter.init()
mixins.init()

Vue.prototype.api = api

/** -------------以下为辅助函数------------- **/
// 登录超时判断
const loginTimeout = () => {
  return utils.getLoginRemainingTime() <= 0
}

// 路由权限判断
const hasPermission = (permissions, routeName) => {
  permissions = permissions || []
  return permissions.indexOf(routeName) !== -1
}

const checkPermission = (to, from, next) => {
  let meta = to.meta || {}
  let auth = config.defaultAuth || false
  if (meta.auth !== undefined) {
    auth = meta.auth
  }
  let accessToken = utils.getAccessToken()
  let permissions = store.getters.userInfo.permissions || []
  if (auth) {
    // 1.需要登录
    if (!accessToken || loginTimeout()) {
      // 2.没有登录信息或者登录已经超时
      next({ name: config.loginPageName })
    } else {
      // 2.正常登录状态
      if (to.name === config.loginPageName) {
        // 3.访问登录页时
        if (hasPermission(permissions, config.indexPageName)) {
          // 4.如果有首页权限，则直接跳转到首页
          next({ name: config.indexPageName })
        } else {
          // 4.没有首页权限，则继续停留在登录页
          next()
        }
      } else {
        // 3.访问非登录页
        if (hasPermission(permissions, to.name)) {
          // 4.如果有权限，则直接访问
          next()
        } else {
          // 4.无权限则访问401
          console.warn('无权访问路由：' + to.name + ' ，请联系管理员添加！')
          next({ name: '401' })
        }
      }
    }
  } else {
    // 1.不需要登录
    if (to.name === config.loginPageName) {
      // 2.如果访问的是登录页，且登录超时，则直接访问
      if (loginTimeout()) {
        // 3.登录已经超时了
        next()
      } else {
        // 3.登录未超时
        if (hasPermission(permissions, config.indexPageName)) {
          // 4.有访问首页的权限则跳到首页
          next({ name: config.indexPageName })
        } else {
          // 4.没有就继续访问登录页
          next()
        }
      }
    } else {
      // 2.不是登录页直接访问
      next()
    }
  }
}

router.beforeEach((to, from, next) => {
  console.log('即将访问路由：' + (to.name || to.path))
  if (from.name && to.path === '/') {
    store.dispatch('animSwitch', {
      animtype: 'right'
    })
  } else {
    store.dispatch('animSwitch', {
      animtype: 'left'
    })
  }
  checkPermission(to, from, next)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
