<template>
  <div id="Btn">
    <div class="boxleft">
      <recommend-view></recommend-view>
      <thenewdiscshelves-view></thenewdiscshelves-view>
      <booklist-view></booklist-view>
    </div>
    <div class="boxright">
      <singer-view></singer-view>
      <thehost-view></thehost-view>
    </div>
  </div>
</template>

<script>
import recommendView from "@/components/recommendView.vue";
import ThenewdiscshelvesView from "@/components/ThenewdiscshelvesView.vue";
import BooklistView from "@/components/BooklistView.vue";
import singerView from "@/components/singerView.vue";
import ThehostView from "@/components/ThehostView.vue";

export default {
  created() {},
  components: {
    recommendView,
    BooklistView,
    ThenewdiscshelvesView,
    singerView,
    ThehostView,
  },
};
</script>

<style scoped>
#Btn {
  width: 1000px;
  border: 1px solid #d3d3d3;
  margin: 0px auto;
  box-sizing: border-box;
  display: flex;
}
.boxleft {
  width: 750px;
}
.boxright {
  width: 250px;
}
</style>
