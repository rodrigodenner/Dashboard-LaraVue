import { createRouter, createWebHistory } from 'vue-router'


const routes = [
 
  {
    path: '/',
    name: 'login',
    component: () => import( '../views/admin/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( '../views/admin/DashboardView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
