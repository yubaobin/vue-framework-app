import Vue from 'vue'
import config from '../config'
export default {
  init () {
    Vue.mixin({
      methods: {
        setTitle (title) {
          let meta = this.$route && this.$route.meta ? this.$route.meta : {}
          document.title = title || meta.title || config.appName || ''
        },
        preImg (imglist, progress) {
          let list = []
          let d = 0
          for (const item of imglist) {
            list.push(this.loadImag(item).then((src) => {
              d++
              progress(Math.round((d * 100) / imglist.length))
              return src
            }))
          }
          return Promise.all(list)
        },
        loadImag (src) {
          const p = new Promise((resolve, reject) => {
            const image = new Image()
            image.src = src
            image.onload = () => {
              resolve(src)
            }
            image.onerror = (err) => {
              reject(err)
            }
          })
          return p
        }
      }
    })
  }
}
