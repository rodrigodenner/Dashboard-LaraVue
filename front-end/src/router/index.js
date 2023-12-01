import { createRouter, createWebHistory } from 'vue-router'


const routes = [
 
  {
    path: '/',
    name: 'login',
    component: () => import( '@/views/pages/login/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import( '../views/admin/dashboard/DashboardView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/admin/dashboard/HomeView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/admin/dashboard/ProductsView.vue')
  },
  {
    path: '/vends',
    name: 'vends',
    component: () => import( '../views/admin/dashboard/VendsView.vue')
  },
  {
    path: '/relators',
    name: 'relators',
    component: () => import( '../views/admin/dashboard/RelatorsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
