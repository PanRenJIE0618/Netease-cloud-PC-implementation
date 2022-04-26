<template>
  <div id="Thehost">
    <div class="top_title">
      <span class="title">热门主播</span>
    </div>
    <div>
      <div class="box" v-for="(v, i) in Thehost" :key="i">
        <img :src="v.avatarUrl" alt="" />
        <div>
          <p>{{ v.nickName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Thenewdiscshelves } from "@/http/request";
export default {
  data() {
    return {
      Thehost: [],
    };
  },
  created() {
    Thenewdiscshelves("/dj/toplist/newcomer", {
      limit: 5,
    }).then((res) => {
      let { list } = res.data.data;
      this.Thehost = list;
    });
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 14px;
}
.top_title {
  width: 200px;
  margin: 0px auto;
  padding: 10px 0px;
  border-bottom: 1px solid #cccccc;
}
.box {
  margin: 20px;
  display: flex;
}
.box img {
  width: 50px;
}
.box p {
  margin: 10px;
}
</style>
