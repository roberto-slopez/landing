import { createRouter, createWebHistory } from 'vue-router'
import Workshops from '../views/Workshops.vue'

const routes = [
  {
    path: '/workshops',
    name: 'Workshops',
    component: Workshops
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
