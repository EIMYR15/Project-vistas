import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('auth') === 'true', // Persistencia simple
  }),
  actions: {
    login() {
      this.isAuthenticated = true
      localStorage.setItem('auth', 'true') // Guardar en localStorage
    },
    logout() {
      this.isAuthenticated = false
      localStorage.removeItem('auth') // Eliminar autenticación
    },
    checkAuth() {
      this.isAuthenticated = localStorage.getItem('auth') === 'true'
    },
  },
})
