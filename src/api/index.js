import fetch from '@/utils/fetch'
import config from '@/config'
export default {
  authWX (params) {
    Object.assign(params, { grant_type: 'client_credential', appid: config.wx.appId, secret: config.wx.secret })
    return fetch('/wx/getToken', params, { method: 'get' })
  },
  qrcode (params) {
    Object.assign(params, { key: '69b57aca41f61fac9e18b22971d5fdc8' })
    return fetch('/wx/getQrcode', params, { method: 'get' })
  }
}
