import { createRouter, createWebHistory } from 'vue-router'


const routes = [
 
  {
    path: '/',
    name: 'login',
    component: () => import( '@/views/pages/login/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home-index',
    component: () => import( '../views/admin/dashboard/HomeView.vue')
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import( '../views/admin/dashboard/ClientsView.vue')
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
