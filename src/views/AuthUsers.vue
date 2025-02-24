<script setup lang="ts">
import AdminLayout from '../layouts/MasterLayout.vue'
import { ref } from 'vue'

const usuarios = ref([
  { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Administrador' },
  { id: 2, nombre: 'María González', email: 'maria@example.com', rol: 'Usuario' },
  { id: 3, nombre: 'Carlos Rodríguez', email: 'carlos@example.com', rol: 'Editor' },
])
</script>

<template>
  <AdminLayout>
    <div class="container">
      <header>
        <h2>Gestión de Usuarios</h2>
        <p>Aquí puedes administrar los usuarios de la plataforma.</p>
      </header>

      <button class="add-user">+ Agregar Usuario</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.rol }}</td>
            <td>
              <button class="edit">Editar</button>
              <button class="delete">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </AdminLayout>
</template>

<style scoped>
/* Contenedor principal */
.container {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Encabezado */
header h2 {
  color: #2c3e50;
}

header p {
  color: #7f8c8d;
  margin-bottom: 1rem;
}

/* Botón agregar usuario */
.add-user {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.add-user:hover {
  background: #2980b9;
}

/* Tabla de usuarios */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background: #ecf0f1;
  color: #2c3e50;
}

/* Botones de acciones */
button.edit {
  background: #f39c12;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button.delete {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
}

button.edit:hover {
  background: #e67e22;
}

button.delete:hover {
  background: #c0392b;
}
</style>
