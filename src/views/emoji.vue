<template>
    <div>
        <div class="img-list" v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <div class="img-item" v-for="(item, index) in imglist" :key="index">
                <img :src="item" />
            </div>
            <div class="loading">
                <mt-spinner type="fading-circle"></mt-spinner>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import p1 from '@/assets/images/p1.jpg'
import p2 from '@/assets/images/p2.jpg'
import p3 from '@/assets/images/p3.jpg'
import p4 from '@/assets/images/p4.jpg'
import p5 from '@/assets/images/p5.jpg'
import p6 from '@/assets/images/p6.png'
import p7 from '@/assets/images/p7.jpg'
import p8 from '@/assets/images/p8.jpg'
import p9 from '@/assets/images/p9.jpg'
import p10 from '@/assets/images/p10.jpg'
import p11 from '@/assets/images/p11.jpg'
export default {
  data () {
    return {
      list: [],
      imglist: []
    }
  },
  created () {
    this.list = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11]
  },
  methods: {
    loadMore () {
      window.setTimeout(() => {
        this.imglist = [...this.imglist, ...this.list]
      }, 2000)
    }
  }
}
</script>
<style scoped lang="less">
    .img-item {
        img {
            width: 100%;
        }
    }
    .loading {
        padding: 5px/@baseFontSize 0px;
        text-align: center;
    }
</style>
