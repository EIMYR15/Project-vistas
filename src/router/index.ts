import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/AuthLogin.vue'
import Register from '../views/AuthRegister.vue'
import ResetPassword from '../views/AuthResetPassword.vue'
import Dashboard from '../views/Dashboard.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'AuthLayout',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        layout: 'AuthLayout',
      },
    },
    {
      path: '/reset-password',
      name: 'resetPassword',
      component: ResetPassword,
      meta: {
        layout: 'AuthLayout',
      },
    },

    {
      path: '/',
      name: 'home',
      component: Dashboard,
      meta: {
        layout: 'MasterLayout',
      },
    },
  ],
})

// Verificar autenticación antes de entrar a cada ruta
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  authStore.checkAuth() // Asegurar que el estado esté actualizado

  if (!['login', 'register', 'resetPassword'].includes(to.name) && !authStore.isAuthenticated) {
    next('/login') // Redirigir al login si no está autenticado
  } else if (to.name == 'login' && authStore.isAuthenticated) {
    next('/') // Redirigir al login si no está autenticado
  } else {
    next() // Continuar con la navegación
  }
})

export default router
