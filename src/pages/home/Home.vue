<template>
  <div>
    <home-header/>
    <home-swiper/>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style lang="stylus">

</style>
