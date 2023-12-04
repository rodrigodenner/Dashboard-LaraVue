<template>
  <div
    :class="['flex flex-col p-6 my-4 text-gray-700', bgColor,'rounded-md md:w-full']"
  >
    <div class="flex items-center justify-between mb-2 top">
      <h3 class="text-lg font-bold">{{ type }}</h3>
      <p class="flex items-center">
        <i :class="['mr-1 text-green-500 fa', iconScore]"></i>
        <span class="text-lg font-normal">{{percentagem}} <i :class="['fa-thin', iconPercentagem]"></i></span>
      </p>
    </div>
    <div class="flex items-center justify-between footer">
      <span class="mr-2 text-2xl">
        <i :class="['fa ', iconCard]"></i>
      </span>
      <p class="text-xl">{{qtd}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsComponent",
  props: {
    bgColor: String,
    type: String,
    iconScore: String,
    percentagem: String,
    iconPercentagem: String,
    iconCard: String,
    qtd: String,
  },
};
</script>

<style scoped>
/* Se houver necessidade de estilos adicionais, você pode adicioná-los aqui. */
</style>
