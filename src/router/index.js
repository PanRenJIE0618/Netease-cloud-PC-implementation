import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routerRePush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return routerRePush.call(this, location).catch((error) => error);
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/IndexView",
        name: "IndexView",
        component: () => import("../views/IndexView.vue"),
      },
      {
        path: "/RankingView",
        name: "RankingView",
        component: () => import("../views/RankingView.vue"),
      },
      {
        path: "/AnchorView",
        name: "AnchorView",
        component: () => import("../views/AnchorView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
