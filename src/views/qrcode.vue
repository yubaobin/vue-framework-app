<template>
  <div class="bg">
    <mt-header fixed title="二维码">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="wrapper">
      <input class="m-input" placeholder="请输入生成内容" v-model="text" />
      <div class="container">
        <img v-if="network" :src="src" />
        <vue-qrcode v-else :value="vueQr" :options="{ size }" tag="img"></vue-qrcode>
        <div class="bottom">
          <div class="checkbox">
            <label>
              <span class="cb">
                <input type="checkbox" v-model="isWebSize" />
                <span></span>
              </span>
              <span class="label">是否网站</span>
            </label>
          </div>
          <mt-button type="primary" @click="change">点击生成</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/logo.jpg'
import { Toast, Indicator } from 'mint-ui'
import VueQrcode from '@xkeshi/vue-qrcode'

export default {
  data () {
    return {
      text: '',
      isWebSize: '0',
      src: logo,
      network: true,
      vueQr: ''
    }
  },
  components: {
    VueQrcode
  },
  methods: {
    change () {
      let qrtext = this.text
      if (qrtext) {
        Indicator.open()
        if (this.isWebSize) {
          qrtext = `http://${this.text}`
        }
        this.api.qrcode({ text: qrtext }).then(res => {
          this.network = true
          this.src = this.toImage(res.result.base64_image)
          Indicator.close()
        }).catch(() => {
          this.network = false
          this.vueQr = qrtext
          Indicator.close()
        })
      } else {
        Toast({
          message: '输入点东西啊 :(',
          position: 'middle',
          duration: 3000
        })
      }
    },
    toImage (base64) {
      return `data:image/jpeg;base64,${base64}`
    }
  },
  watch: {
    isWebSize (v1, v2) {
    }
  },
  computed: {
    size () {
      const width = document.documentElement.clientWidth
      return width / 375 * 207
    }
  }
}
</script>
<style scoped lang='less'>
  * {
    pointer-events: auto;
  }
  .form {
    width: 100%;
  }
  .bg {
    background: url('~@/assets/images/bg.jpg') no-repeat top center/100% auto;
  }
  .container {
    position: relative;
    padding-top: 15px/@baseFontSize;
    width: 260px/@baseFontSize;
    height: 345px/@baseFontSize;
    margin: auto;
    background: url('~@/assets/images/card.png') no-repeat center/100% 100%;
    text-align: center;
    img {
      position: relative;
      z-index: 9;
      width: 207px/@baseFontSize;
      height: 207px/@baseFontSize;
      margin-top: 22px/@baseFontSize;
    }
    .bottom {
      position: absolute;
      bottom: 10px/@baseFontSize;
      text-align: center;
      left: 0px;
      right: 0px;
    }
  }
  .m-input {
    outline: none;
    border: none;
    border-radius: 10px;
    display: block;
    width: 80%;
    margin: 20px/@baseFontSize auto;
    background-color: fade(#fff, 24);
    height: 36px;
    line-height: 36px;
    padding: 0px 10px;
    color: #fff;
    font-size: 16px;
  }
  .checkbox {
    font-size: 20px;
    margin-bottom: 15px/@baseFontSize;
    label {
      display: block;
      .cb {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px/@baseFontSize;
        span {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 999px;
          border: 1px solid #CDCDCD;
        }
        input[type=checkbox] {
          position: absolute;
          left: -999em;
        }
        input[type=checkbox]:checked + span {
          position: relative;
          background-color: #26a2ff;
          border-color: #26a2ff;
          &:after {
            position: absolute;
            content: '';
            width: 6px;
            height: 6px;
            background-color: #fff;
            left: 0px;
            bottom: 0px;
            top: 0px;
            right: 0px;
            margin: auto;
            border-radius: 999px;
          }
        }
      }
      .label {
        vertical-align: middle;
        line-height: 1;
      }
    }
  }
</style>
