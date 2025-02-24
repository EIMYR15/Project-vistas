<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import MasterLayout from './layouts/MasterLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const layouts = { MasterLayout, AuthLayout }
const route = useRoute()

// Determinar qué layout usar según la ruta
const layout = computed(() => layouts[route.meta.layout] || AuthLayout)
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
