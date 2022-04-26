<template>
  <div class="globalmedia">
    <div class="title1">全球媒体排行榜</div>
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
      this.list = res.data.list.slice(4);
    });
   
  },
};
</script>

<style scoped>
.title1 {
  text-align: center;
  line-height: 60px;
}
.globalmedia > div {
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
}
.globalmedia > div img {
  margin-right: 15px;
}
.globalmedia > div div {
  padding-top: 5px;
}
.globalmedia > div div p:nth-child(2) {
  font-size: 14px;
  color: #ccc;
  margin-top: 10px;
}
</style>