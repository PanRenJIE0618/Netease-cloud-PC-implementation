<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
// import { Queryphone } from "@/http/request";
export default {
  data() {
    return {};
  },
  created() {
    // Queryphone("cellphone/existence/check", {
    //   phone: 17856364525,
    // }).then((res) => {
    //   console.log(res);
    // });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>
