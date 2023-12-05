<template>
  <div class="overflow-scroll">
    <h4
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{title}}
    </h4>
    <table
      class="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-3 py-3">{{description.optOne}}</th>
          <th scope="col" class="px-3 py-3">{{description.optTwo}}</th>

        </tr>
      </thead>
      <tbody class="overflow-y-auto max-h-72">
        <tr
          v-for="user in data"
          :key="user.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ user.name }}
          </th>
          <td class="px-6 py-4">
            {{ user.email }}
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    data: Array,
    title: String,
    description: {
      optOne: String,
      optTwo: String,
    },
  },
};
</script>

<style scoped>
</style>
