import { createRouter, createWebHistory } from "vue-router";
import MainCard from "../components/MainCard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Vue-website/",
      component: MainCard,
    },
    {
      path: "/Vue-website/list/",
      component: () => import("../views/List.vue"),
    },
  ],
});

export default router;
