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
    {
      path: "/Vue-website/quiz/",
      component: () => import("../views/QuizView.vue"),
    },
    {
      path: "/Vue-website/quiz/reward",
      component: () => import("../views/QuizReward.vue"),
    },
    {
      path: "/Vue-website/profile/",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

export default router;
