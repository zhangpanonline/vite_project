import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home/Index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Index.vue'),
    },
  ],
})

export default router
