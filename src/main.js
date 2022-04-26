import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.filter("setTime", function (el) {
  let oDate = new Date(el);
  //  console.log(oDate);
  let month =
    oDate.getMonth() + 1 < 10
      ? "0" + (oDate.getMonth() + 1)
      : oDate.getMonth() + 1;
  let date = oDate.getDate();
  return month + "月" + date + "日";
});
Vue.filter("setTime2", function (el) {
  let oDate = new Date(el);
  let min = oDate.getMinutes();
  let sec = oDate.getSeconds();
  return min + ":" + sec;
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
