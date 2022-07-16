import { createRouter, createWebHistory } from "vue-router";
import MainCard from "../components/MainCard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainCard,
    },
    {
      path: "/list",
      component: () => import("../views/List.vue"),
    },
  ],
});

export default router;
