<template>
  <div class="home">
    <img src="@/assets/logo.jpg" />
    <div class="list">
      <mt-cell to="/emoji" is-link><span slot="title"><icon-svg iconClass="set"></icon-svg>表情包</span></mt-cell>
      <mt-cell title="二维码" to="/qrcode" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created () {
  }
}
</script>
<style scoped lang="less">
  .home {
    text-align: center;
  }
  .list {
    text-align: left;
  }
</style>
