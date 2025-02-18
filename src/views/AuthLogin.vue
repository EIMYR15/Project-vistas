<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  console.log('Email:', email.value, 'Password:', password.value)
  alert('Inicio de sesión simulado')
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
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full p-2 border rounded"
            required
          />
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
      </form>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
</style>

