import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Workshops from '../views/Workshops.vue'
import WorkshopForm from '../views/WorkshopForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component: Workshops
  },
  {
    path: '/workshops/book',
    name: 'WorkshopForm',
    component: WorkshopForm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
