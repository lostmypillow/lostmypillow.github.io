import Resumes from "./pages/Resumes.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Home, name: "",  meta: { title: '林家民' } },
  { path: "/projects", component: Projects, name: "我的專案",   meta: { title: '林家民的專案' } },
  { path: "/resumes", component: Resumes, name: "我的履歷" ,   meta: { title: '林家民的履歷' }},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// In router/index.js (after creating the router instance)

router.beforeEach((to, from, next) => {
  // Check if the route has a meta title defined
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    // Fallback title if no specific title is defined for the route
    document.title = '林家民';
  }
  next(); // Don't forget to call next()
});
export default router