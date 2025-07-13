import Resumes from "./pages/Resumes.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Home, name: "" },
  { path: "/about", component: About, name: "關於我" },
  { path: "/projects", component: Projects, name: "我的專案" },
  { path: "/resumes", component: Resumes, name: "我的履歷" },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});