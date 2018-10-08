import fetch from '@/utils/fetch'
import config from '@/config'
export default {
  install (Vue) {
    Vue.prototype.api = {
      authWX (params) {
        Object.assign(params, { grant_type: 'client_credential', appid: config.wx.appId, secret: config.wx.secret })
        return fetch('/getToken', params, { method: 'get' })
      },
      qrcode (params) {
        Object.assign(params, { key: '69b57aca41f61fac9e18b22971d5fdc8' })
        return fetch('/getQrcode', params, { method: 'get' })
      },
      test () {
        return fetch('/test1', '', { method: 'post' })
      }
    }
  }
}
