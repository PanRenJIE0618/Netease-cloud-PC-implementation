<template>
  <div id="swiper">
    <div id="box">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(v, i) in 10" :key="i">
          <img :src="require('../assets/swiper' + i + '.jpg')" alt="" />
          <!-- :src="require('../assets/swiper' + i + '.jpg')" -->
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div
        class="swiper-button-prev"
        slot="button-prev"
        @mousemove="mouov(1)"
        @mouseout="mouut()"
      ></div>
      <div
        class="swiper-button-next"
        slot="button-next"
        @mousemove="mouov(2)"
        @mouseout="mouut()"
      ></div>

      <div id="client">
        <span>PC 安卓 iPhone WP iPad Mac 六大客户端</span>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
var prev = document.getElementsByClassName("swiper-button-prev");
var next = document.getElementsByClassName("swiper-button-next");

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  created() {},
  methods: {
    mouov(s) {
      prev = Array.from(prev);
      next = Array.from(next);
      if (s == 1) {
        prev[0].style.background = "#282a36";
        prev[0].style.opacity = "0.5";
      }
      if (s == 2) {
        next[0].style.background = "#282a36";
        next[0].style.opacity = "0.5";
      }
    },
    mouut() {
      prev = Array.from(prev);
      next = Array.from(next);
      prev[0].style.background = "";
      next[0].style.background = "";
    },
  },
  mounted() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>
<style scoped>
#swiper {
  background-image: linear-gradient(to right, #17ead9, #6078ea);
  overflow: hidden;
}
#client {
  width: 250px;
  height: 270px;
  border: 1px solid black;
  background-image: url(../assets/download.png);
  display: flex;
  align-items: flex-end;
}
#client span {
  color: #8d8d8d;
  font-size: 12px;
  margin: 10px;
}
#box {
  width: 1000px;
  height: 270px;
  display: flex;
  margin: 0px auto;
  position: relative;
}
.swiper-container {
  width: 750px;
  height: 270px;
  box-sizing: border-box;
  margin: 0;
  position: relative;
}
.swiper-slide img {
  width: 100%;
}
/* ♻♻♻ 待修改 */
.swiper-button-prev {
  position: absolute;
  color: white;
  top: 150px;
  left: -60px;
}
.swiper-button-next {
  position: absolute;
  color: white;
  top: 150px;
  right: -60px;
}
</style>
