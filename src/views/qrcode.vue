<template>
  <div>
    <mt-header title="二维码">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="form">
      <input v-model="text" />
      <mt-radio title="是否网址" v-model="isWebSize" :options="options"></mt-radio>
    </div>
    <div class="img-container">
      <img :src="src" />
    </div>
    <mt-button type="primary" @click="change">点击生成</mt-button>
  </div>
</template>

<script>
import logo from '../assets/logo.png'

export default {
  data () {
    return {
      text: '',
      isWebSize: '0',
      options: [{
        value: '1',
        label: '是'
      }, {
        value: '0',
        label: '否'
      }],
      src: logo
    }
  },
  methods: {
    change () {
      let qrtext = this.text
      if (this.isWebSize === '1') {
        qrtext = `http://${this.text}`
      }
      this.api.qrcode({ text: qrtext }).then(res => {
        this.src = this.toImage(res.result.base64_image)
      })
    },
    toImage (base64) {
      return `data:image/jpeg;base64,${base64}`
    }
  },
  watch: {
    isWebSize (v1, v2) {
      console.log(v1)
      console.log(v2)
    }
  }
}
</script>
<style scoped lang='less'>
  .form {
    width: 500px;
  }
</style>
