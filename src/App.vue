<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <header class="bg-blue-600 text-white w-full py-4 text-center shadow-md">
      <h1 class="text-3xl font-bold">LINEX</h1>
    </header>

    <main class="flex flex-col items-center w-full max-w-md p-6 mt-6 bg-white shadow-lg rounded-lg">
      <RouterView />
      <nav class="mt-4 w-full text-center">
        <RouterLink to="/" class="text-blue-500 hover:underline mx-2">Iniciar Sesión</RouterLink>
        <RouterLink to="/register" class="text-blue-500 hover:underline mx-2"
          >Registrarse</RouterLink
        >
        <RouterLink to="/reset-password" class="text-blue-500 hover:underline mx-2"
          >Reestablecer</RouterLink
        >
      </nav>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
