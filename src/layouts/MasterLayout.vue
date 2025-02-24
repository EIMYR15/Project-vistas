<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/login') // Redirigir al login
}
</script>

<template>
  <div class="admin-layout">
    <!-- Sidebar de Navegación -->
    <aside>
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Usuarios</a></li>
          <li><a href="#">Reportes</a></li>
          <li><a href="#">Configuración</a></li>
          <li><a href="#" @click="logout">Logout</a></li>
        </ul>
      </nav>
    </aside>

    <!-- Contenido Principal -->
    <div class="content">
      <header>
        <h1>Panel de Administración</h1>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Colores */
:root {
  --azul-oscuro: #2c3e50;
  --azul-claro: #3498db;
  --beige: #f5f5dc;
  --texto-claro: #ffffff;
  --gris-claro: #ecf0f1;
}

/* Diseño base */
.admin-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--gris-claro);
}

/* Sidebar */
aside {
  width: 250px;
  background: var(--azul-oscuro);
  color: var(--texto-claro);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

aside h2 {
  text-align: center;
  font-size: 1.5rem;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 10px 0;
}

nav ul li a {
  color: var(--texto-claro);
  text-decoration: none;
  padding: 10px;
  display: block;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

nav ul li a:hover {
  background: var(--azul-claro);
}

/* Contenido principal */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

header {
  background: var(--azul-claro);
  padding: 1.5rem;
  color: var(--texto-claro);
  text-align: center;
  font-size: 1.8rem;
}

/* Contenido dinámico */
main {
  flex: 1;
  padding: 2rem;
  background: white;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
