<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold text-center mb-6">Registro</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">Nombre</label>
          <input
            v-model="firstName"
            type="text"
            id="firstName"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">Apellido</label>
          <input
            v-model="lastName"
            type="text"
            id="lastName"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Correo Electrónico</label
          >
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
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full p-2 border rounded"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">Teléfono</label>
          <input v-model="phone" type="tel" id="phone" class="w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')

const register = () => {
  console.log(
    'Nombre:',
    firstName.value,
    'Apellido:',
    lastName.value,
    'Email:',
    email.value,
    'Teléfono:',
    phone.value,
  )
  alert('Registro simulado')
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}
</style>
