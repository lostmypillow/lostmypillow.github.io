import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import WhatImWorking from './pages/WhatImWorking.vue'
import WhoAmI from './pages/WhoAmI.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/who-am-i', component: WhoAmI },
    {path: '/what-im-working-on', component: WhatImWorking}
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
createApp(App).use(router).mount('#app')
