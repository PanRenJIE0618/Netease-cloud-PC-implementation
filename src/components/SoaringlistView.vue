<template>
  <div class="soaring-list">
    <div class="aside-left">
      <img
        src="http://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=150y150"
      />
    </div>
    <div class="aside-right">
      <div>
        <p>飙升榜</p>
        <p>
          最近更新：{{ list.updateTime | setTime }} （{{
            list.updateFrequency
          }}）
        </p>
      </div>
      <div>
        <button>播放&nbsp;+</button>
        <button>收藏</button>
        <button>转发</button>
        <button>下载</button>
        <button>评论</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ranking } from "@/http/request.js";
export default {
  data() {
    return {
      list: {},
    };
  },
  created() {
    ranking("/toplist/detail").then((res) => {
    //   console.log(res);
      this.list = res.data.list[0];
    });
  },
};
</script>

<style scoped>
.soaring-list {
  display: flex;
  margin: 40px 40px;
}
.aside-left {
  border: 1px solid #ccc;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.aside-right {
  margin-left: 30px;
}
.aside-right div p:nth-child(1) {
  font-size: 24px;
  margin-top: 20px;
}
.aside-right div p:nth-child(2) {
  font-size: 14px;
  margin-top: 10px;
}
.aside-right div button {
  margin-top: 30px;
  width: 80px;
  height: 40px;
  margin-right: 5px;
  border-radius: 5px;
}
.aside-right div button:nth-child(1) {
  background: #2e6fbd;
  color: #fff;
}
</style>