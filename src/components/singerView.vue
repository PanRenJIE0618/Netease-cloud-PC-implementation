<template>
  <div id="singer">
    <div class="loginbtn">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button @click="Fn()" class="Btn">用户登录</button>
    </div>
    <div class="singer">
      <div class="tl">
        <span>入驻歌手</span>
        <span>查看全部</span>
      </div>
      <div class="singer_box" v-for="(v, i) in artists" :key="i">
        <img :src="v.artist.cover" alt="" />
        <div class="describe">
          <p style="font-weight: bold">{{ v.artist.name }}</p>
          <p>{{ v.identify.imageDesc }}</p>
        </div>
      </div>
      <button class="applyfor">申请成为网易音乐人</button>
    </div>
  </div>
</template>

<script>
import { Thenewdiscshelves } from "@/http/request";
export default {
  data() {
    return {
      artists: [],
    };
  },
  created() {
    Thenewdiscshelves("/top/artists", {
      limit: 5,
    }).then((res) => {
      let list = res.data.artists;
      list.forEach((v) => {
        Thenewdiscshelves("/artist/detail", {
          id: v.id,
        }).then((res) => {
          this.artists.push(res.data.data);
        });
      });
    });
  },
  methods: {
    Fn() {
      console.log(1);
    },
  },
};
</script>

<style scoped>
.loginbtn {
  width: 100%;
  background-color: #e8e8e8;
  border: 1px solid #b1b1b1;
}
.loginbtn p {
  margin: 20px;

  font-size: 14px;
}
.Btn {
  width: 100px;
  height: 30px;
  color: white;
  border-radius: 3px;
  border: 0;
  margin: 15px auto;
  display: block;
  background-color: #cd0e15;
}

.tl {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
}
.tl span {
  font-size: 12px;
  margin: 10px 20px;
}
.singer_box {
  width: 200px;
  margin: 10px auto;
  display: flex;
}
.singer_box img {
  width: 70px;
  height: 70px;
}
.describe p {
  width: 100px;
  height: 19px;
  margin: 10px;
  overflow: hidden;
  background-color: #fafafa;
}
.applyfor {
  display: block;
  margin: 10px auto;
  width: 200px;
  height: 30px;
}
</style>
