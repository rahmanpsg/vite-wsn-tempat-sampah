import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: () => import("../pages/Tentang.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
