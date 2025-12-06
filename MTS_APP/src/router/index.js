import EmployeesView from '@/views/EmployeesView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/employees',
      name: 'employees',
      component: EmployeesView

    }
  ],
})

export default router
