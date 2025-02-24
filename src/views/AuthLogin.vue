<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const login = () => {
  if (email.value === 'admin' && password.value === '1234') {
    authStore.login() // Llamar a la acción de login
    router.push('/') // Redirigir al dashboard
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Correo Electrónico</label
          >
          <br />
          <input v-model="email" id="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password"
            >Contraseña</label
          >
          <br />
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Ingresar
        </button>

        <div>
          <RouterLink to="/register">Register</RouterLink>
          <RouterLink :to="{ name: 'resetPassword' }">Reset PassWord</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
</style>
