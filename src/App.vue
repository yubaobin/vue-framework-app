<template>
  <div id="app">
    <transition :name="animSwitch">
        <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  created () {
    this.setTitle()
    this.api.authWX({}).then((res) => {
      console.log(res)
    })
  },
  watch: {
    '$route' () {
      this.setTitle()
    }
  },
  computed: {
    ...mapGetters([
      'animSwitch'
    ])
  }
}
</script>
<style lang="less" src="./styles/index.less"></style>
