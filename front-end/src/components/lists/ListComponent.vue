<template>
<div class="overflow-scroll ">
  <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >Clientes</h4>
    <table class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Nome
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Contato
                </th>
                
            </tr>
        </thead>
        <tbody class="overflow-y-auto max-h-72 ">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    rodrigo@gmail.com
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
            </tr> 
        </tbody>
    </table>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Estilos específicos para o componente Listcomponent */
/* Adicione estilos adicionais conforme necessário */
</style>
