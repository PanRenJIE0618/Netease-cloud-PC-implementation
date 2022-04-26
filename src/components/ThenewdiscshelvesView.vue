<template>
  <div id="Thenewdiscshelvesd">
    <div class="navigationREM">
      <p style="color: #c10d0c">◉</p>
      <p>新碟上架</p>
    </div>
    <div class="Thenewdiscshelves">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(v, i) in monthData.length / 5"
            :key="i"
          >
            <div
              class="Thenewdbox"
              v-for="(m, j) in monthData.slice(arr[i], arr[i + 1])"
              :key="j"
            >
              <img v-lazy="m.coverUrl" alt="" />
              <span style="font-size: 12px">{{ m.albumName }}</span>
              <p style="font-size: 12px">{{ m.artistName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperOne from "swiper";
import "../../node_modules/swiper/css/swiper.min.css";
import { Thenewdiscshelves } from "@/http/request";
export default {
  data() {
    return {
      monthData: [],
      arr: [0, 5, 10, 15, 20, 25],
    };
  },

  created() {
    setTimeout(() => {
      Thenewdiscshelves("/album/list", {
        limit: 10,
      })
        .then((res) => {
          this.monthData = res.data.products;
        })
        .catch((err) => {
          console.log(err, "请求超时...无线重新加载中");
        });
    }, 100);
  },
  mounted() {
    new SwiperOne(".swiper-container", {
      freeMode: true,
    });
  },
};
</script>

<style scoped>
.navigationREM {
  display: flex;
  border-bottom: 3px solid #c10d0c;
  margin: 15px;
  padding: 5px;
}
.navigationREM p {
  font-size: 20px;
  margin-right: 10px;
}
.swiper-container {
  width: 700px;
  height: 200px;
  box-sizing: border-box;
  margin: 10px auto;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
}
.swiper-slide img {
  width: 100%;
}
.swiper-slide {
  width: 660px !important;
  height: 100px;
  margin: 20px;
  display: flex;
}

.Thenewdbox {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 0px 15px;
}
</style>
