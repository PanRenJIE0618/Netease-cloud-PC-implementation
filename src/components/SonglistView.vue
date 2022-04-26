<template>
  <div>
    <div class="header">
      <div>
        <span>歌曲列表</span>
        <span>100首歌</span>
      </div>
      <div>播放：4934184448次</div>
    </div>
    <div class="main">
      <div class="title">
        <div></div>
        <div>标题</div>
        <div>时长</div>
        <div>歌手</div>
      </div>
      <div class="hot" v-for="(v, i) in list1" :key="i">
        <div>{{ i + 1 }}</div>
        <div>
          <img :src="v.al.picUrl" />
          <div>{{ v.al.name }}</div>
        </div>
        <div>{{ v.dt | setTime2 }}</div>
        <div>
          <span v-for="(item, index) in v.ar" :key="index">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 19723756 -->
<script>
import { songlistdetails } from "@/http/request.js";
export default {
  data() {
    return {
      list1: [],
    };
  },
  created() {
    songlistdetails("/playlist/detail?id=19723756").then((res) => {
      this.list1 = res.data.playlist.tracks;
    });
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.header div:nth-child(1) {
  margin-left: 40px;
}
.header div:nth-child(1) span:nth-child(1) {
  font-size: 30px;
}
.header div:nth-child(1) span:nth-child(2) {
  font-size: 14px;
  margin-left: 15px;
}
.header div:nth-child(2) {
  margin-right: 20px;
}
.main {
  width: 90%;
  margin: 10px auto;
  border: 1px solid #ccc;
}
.title {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.title div {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  padding-left: 8px;
  box-sizing: border-box;
}

.title div:nth-child(1) {
  width: 15%;
}
.title div:nth-child(2) {
  width: 45%;
}
.title div:nth-child(3) {
  width: 15%;
}
.title div:nth-child(4) {
  width: 25%;
}
.hot {
  display: flex;
}
.hot div {
  height: 100px;
  line-height: 100px;
  padding-left: 8px;
  box-sizing: border-box;
  font-size: 14px;
}
.hot div:nth-child(1) {
  width: 15%;
}
.hot div:nth-child(2) {
  width: 45%;
  display: flex;
  align-items: center;
  flex: 1;
}
.hot div:nth-child(2) div {
  white-space: nowrap;
  /* 文本溢出不换行(白空格不换行) */
  overflow: hidden;
  /* 溢出部分隐藏 */
  text-overflow: ellipsis;
}
.hot div:nth-child(2) img {
  width: 60px;
  height: 60px;
}
.hot div:nth-child(3) {
  width: 15%;
}
.hot div:nth-child(4) {
  width: 25%;
}
</style>
