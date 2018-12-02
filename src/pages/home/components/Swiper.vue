<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
  
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/vc/a4/36/26/07c5904b545d66b3abe72e9dfa.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff !important 
/*样式穿透 不受scoped限制*/    
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%/*fast 3g模式下图片未完成加载会出现页面明显抖动*/
  background-color #eee/*图片加载出来之前给灰色背景*/ 
  /* 根据图片尺寸保持图片的宽高比例为31.25% */
  /*height 31.25vw*/ /*去掉height overflow padding-bottom只写这句也行 但浏览器可能不兼容*/
  
  .swiper-img 
    width 100%
  
</style>
