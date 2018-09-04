<template>
  <div class="home">
    <img src="@/assets/logo.png" />
    <div class="list">
      <mt-cell title="表情包" to="/emoji" is-link></mt-cell>
      <mt-cell title="二维码" to="/qrcode" is-link></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
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
