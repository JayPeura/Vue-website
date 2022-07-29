import { createRouter, createWebHashHistory } from "vue-router";
import MainCard from "../components/MainCard.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: MainCard,
    },
    {
      path: "/list/",
      component: () => import("../views/List.vue"),
    },
    {
      path: "/quiz/",
      component: () => import("../views/QuizView.vue"),
    },
    {
      path: "/quiz/reward/",
      component: () => import("../views/QuizReward.vue"),
    },
    {
      path: "/profile/",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/random/",
      component: () => import("../views/RandomView.vue"),
    },
    {
      path: "/text-adventure/",
      component: () => import("../views/TextAdventure.vue"),
    },
  ],
});

export default router;
