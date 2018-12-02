import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css"; //使用别名
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper); //放在后面

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
