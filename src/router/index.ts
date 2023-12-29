import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "top",
      component: () => import("@/views/Top.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/Search.vue"),
    },
    {
      path: "/admin-login",
      name: "admin-login",
      component: () => import("@/views/AdminLogin.vue"),
    },
    {
      path: "/rule",
      name: "rule",
      component: () => import("@/views/Rule.vue"),
    },
  ],
});

export default router;
