import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import WhoAmI from './pages/WhoAmI.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/whoami', component: WhoAmI },
    {path: '/projects', component: Projects}
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
createApp(App).use(router).mount('#app')
