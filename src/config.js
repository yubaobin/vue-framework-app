// 应用具体配置
export default {
  appName: 'demo',
  httpHeaders: {
    'Content-Type': 'application/json'
  },
  // 微信
  wx: {
    appId: 'wx7b3e1075c1ff53d3',
    secret: 'dc310e4a36b261549f24dcf1cf302987'
  },
  apiPath: {
    default: '/wx',
    product: 'http://www.ybaob.com/wx'
  },
  // req切面配置
  requestInterceptor (req) {
    return req
  },
  // response切面配置
  responseInterceptor (res) {
    // 可以统一处理一些http层面的异常
    // 业务层面一些通用的异常可以在store/utils.js中处理，其余单独请求的异常请直接在接口api调用时catch就行
    return res.data
  },
  // 渲染错误处理
  errorHandler (e) {
    console.error('捕获到了错误：' + e)
  }
}
