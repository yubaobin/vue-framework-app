<template>
  <div id="app">
    <transition :name="animSwitch">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less" src="./styles/index.less"></style>
