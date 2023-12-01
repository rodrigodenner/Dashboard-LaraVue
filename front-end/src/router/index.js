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
    component: () => import( '../views/admin/pages/HomeView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/admin/pages/ProductsView.vue')
  },
  {
    path: '/vends',
    name: 'vends',
    component: () => import( '../views/admin/pages/VendsView.vue')
  },
  {
    path: '/relators',
    name: 'relators',
    component: () => import( '../views/admin/pages/RelatorsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
