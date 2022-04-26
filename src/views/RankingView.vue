<template>
  <div class="ranking">
    <div class="aside-left">
      <div class="cloud-music">
        <cloudmusic-view></cloudmusic-view>
      </div>
      <div class="global-media">
        <globalmedia-view></globalmedia-view>
      </div>
    </div>
    <div class="aside-right">
      <div class="soaring-list">
        <soaringlist-view></soaringlist-view>
      </div>
      <div class="song-list">
        <songlist-view></songlist-view>
      </div>
    </div>
  </div>
</template>

<script>
import CloudmusicView from "@/components/CloudmusicView.vue";
import GlobalmediaView from "@/components/GlobalmediaView.vue";
import SoaringlistView from "@/components/SoaringlistView.vue";
import SonglistView from "@/components/SonglistView.vue";
export default {
  // 排行榜页面
  name: "RankingView",
  components: {
    CloudmusicView,
    GlobalmediaView,
    SoaringlistView,
    SonglistView,
  },
};
</script>

<style scoped>
.ranking {
  display: flex;
  width: 70%;
  margin: 0 auto;
}
.aside-left {
  width: 22%;
}
.aside-right {
  width: 60%;
}
</style>
