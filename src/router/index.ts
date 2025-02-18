import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/AuthLogin.vue'
import Register from '../views/AuthRegister.vue'
import ResetPassword from '../views/AuthResetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPassword,
    },
  ],
})

export default router
