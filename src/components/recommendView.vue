<template>
  <div id="recommend">
    <div class="navigationREM">
      <p style="color: #c10d0c">◉</p>
      <p>热门推荐</p>
      <ul class="navigationUl">
        <li
          class="presentplaylist"
          v-for="(v, i) in playlist.slice(0, 5)"
          :key="i"
        >
          <a href="" class="navigationA">{{ v.name }}</a>
          <span class="navigationP">|</span>
        </li>
      </ul>
    </div>
    <div class="Slistdets">
      <div class="Slistdet" v-for="(v, i) in Slistdetails" :key="i">
        <img v-lazy="v.coverImgUrl" alt="" />
        <p>{{ v.name }}</p>
        <p class="playCount">听{{ playCountS(v.playCount) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Btnthelaylist, Songlistdetailsd } from "@/http/request";

export default {
  data() {
    return {
      playlist: [],
      Slistdetails: [],
    };
  },
  computed: {
    //三目运算
    playCountS() {
      return function (val) {
        return val > 10000 ? val.toString().slice(0, -4) + "万" : val;
      };
    },
  },
  created() {
    Btnthelaylist("/playlist/hot").then((res) => {
      this.playlist = res.data.tags;
    });
    Songlistdetailsd("/top/playlist", {
      limit: 8,
    }).then((res) => {
      // ★★★★ 播放量为  playCount
      this.Slistdetails = res.data.playlists;
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
.navigationUl {
  display: flex;
}
.presentplaylist {
  font-size: 12px;
  line-height: 24px;
  display: flex;
  margin: 0px 7px;
}
.navigationP {
  color: #e3d6cc;
  font-size: 6px !important;
  margin-left: 10px;
}
.navigationA {
  color: #666666;
}
.Slistdets {
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
}
.Slistdet {
  width: 140px;
  height: 180px;
  margin: 17px;
  position: relative;
}
.Slistdet img {
  width: 100%;
}
.playCount {
  position: absolute;
  height: 20px;
  line-height: 20px;
  text-indent: 10px;
  width: 140px;
  color: white;
  opacity: 0.5;
  font-size: 12px;
  background-color: black;
  bottom: 40px;
}
</style>
