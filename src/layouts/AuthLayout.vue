<template>
  <div class="layout">
    <!-- Encabezado con navegación -->
    <header>
      <div class="header-content">
        <h1>Negrita</h1>
      </div>
    </header>

    <!-- Contenido Principal -->
    <main>
      <slot></slot>
    </main>

    <!-- Pie de Página -->
    <footer>
      <p>&copy; 2025 Linex - Todos los derechos reservados</p>
    </footer>
  </div>
</template>

<style scoped>
/* Paleta de colores */
:root {
  --azul-oscuro: #2c3e50;
  --azul-claro: #3498db;
  --beige: #f5f5dc;
  --texto: #ffffff;
  --sombra: rgba(0, 0, 0, 0.1);
}

/* Estructura General */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--beige);
  font-family: 'Arial', sans-serif;
}

/* Header */
header {
  background: linear-gradient(to right, var(--azul-oscuro), var(--azul-claro));
  color: var(--texto);
  padding: 1rem 2rem;
}

/* Contenido del Header */
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

/* Navegación */
nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: var(--texto);
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 12px;
  transition:
    background-color 0.3s ease-in-out,
    border-radius 0.3s ease-in-out;
}

nav ul li a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

/* Contenido Principal */
main {
  flex: 1;
  padding: 2rem;
  max-width: 900px;
  margin: 2rem auto;
  background: white;
  box-shadow: 0px 4px 8px var(--sombra);
  border-radius: 8px;
}

/* Footer */
footer {
  background: var(--azul-oscuro);
  color: var(--texto);
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  margin-top: auto;
}
</style>
