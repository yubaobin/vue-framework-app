import fetch from '@/utils/fetch'
export default {
  authWX () {
    return fetch('/wx/getSignature', {}, { method: 'get' })
  },
  qrcode (params) {
    Object.assign(params, { key: '69b57aca41f61fac9e18b22971d5fdc8' })
    return fetch('/wx/getQrcode', params, { method: 'get' })
  }
}
