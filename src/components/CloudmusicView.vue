<template>
  <div class="cloudmusic">
    <div class="title1">云音乐特色榜</div>
    <div v-for="(v, i) in list" :key="i">
      <img :src="v.coverImgUrl" />
      <div>
        <p>{{ v.name }}</p>
        <p>{{ v.updateFrequency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ranking } from "@/http/request.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    ranking("/toplist/detail").then((res) => {
      //   console.log(res);
      this.list = res.data.list.slice(0, 4);
    });
  },
};
</script>

<style scoped>
.title1 {
  text-align: center;
  line-height: 60px;
}
.cloudmusic > div {
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
}
.cloudmusic > div img {
  margin-right: 15px;
}
.cloudmusic > div div {
  padding-top: 5px;
}
.cloudmusic > div div p:nth-child(2) {
  font-size: 14px;
  color: #ccc;
  margin-top: 10px;
}
</style>
