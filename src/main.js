import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import api from './api'

// 引入mint ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入移动端适配
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

// 引入Mint ui
Vue.use(Mint)
// api
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
