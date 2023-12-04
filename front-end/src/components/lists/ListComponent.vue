<!-- Listcomponent.vue -->

<template>
  <div class="max-w-md p-3 bg-white border border-gray-200 rounded-lg shadow">
    <div class="mb-5 text-lg text-gray-700 uppercase bg-white border-b bg-gray-50 d">
      <h3>Clientes</h3>
    </div>
    <div class="relative overflow-x-auto overflow-y-auto">
      <table class="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead class="text-xs text-gray-700 uppercase bg-white border-b bg-gray-50 d">
          <tr>
            <th scope="col" class="sticky top-0 z-10 px-6 py-3 bg-white">
              Nome
            </th>
            <th scope="col" class="sticky top-0 z-10 px-6 py-3 bg-white">
              Email
            </th>
            <th scope="col" class="sticky top-0 z-10 px-6 py-3 bg-white">
              Telefone
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" class="bg-white border-b d">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              
            </th>
            <td class="px-6 py-4">
              {{ item.email }}
            </td>
            <td class="px-6 py-4">
              {{ item.phone }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // Adicione seus dados aqui
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente Listcomponent */
/* Adicione estilos adicionais conforme necessário */
/* A altura máxima não é mais definida para permitir a rolagem vertical */
.table-scrollable {
  max-height: 96px; /* Ajuste conforme necessário */
  overflow-y: auto;
}
</style>
