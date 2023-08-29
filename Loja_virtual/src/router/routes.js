import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Cart from '../views/Cart/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: Cart
    }
  ]
})

export default router
