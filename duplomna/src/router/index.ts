import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardPage from "@/pages/DashboardPage.vue";
import FlatPicker from "@/pages/FlatPicker.vue";
import Login from "@/pages/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "DashboardPage",
    component: DashboardPage,
  },
  {
    path: "/d",
    name: "flatPicker",
    component: FlatPicker,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
