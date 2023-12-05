<template>
  <div class="sidebar">
    <div class="flex items-center p-4 mt-16 mb-8 top">
      <div class="avatar">
        <span class="flex items-center justify-center block w-12 h-12 text-2xl text-gray-600 bg-gray-300 rounded-full">
          <i class="fa fa-user"></i>
        </span>
      </div>
      <div class="ml-4 avatar-desc">
        <p class="flex text-sm text-white name">
          <span class="mr-1">Rodrigo</span>
          <span>Denner</span>
        </p>
        <p class="text-xs text-white status">Online</p>
      </div>
    </div>
    <div class="px-4 menu">
      <ul>
        <li class="mb-4">
          <router-link :to="{ name: 'home-index' }" class="flex items-center text-white">
            <span class="mr-2"><i class="fa-solid fa-house"></i></span>
            Home
          </router-link>
        </li>
        <li class="mb-4">
          <router-link :to="{ name: 'products' }" class="flex items-center text-white">
            <span class="mr-2"><i class="fa-brands fa-product-hunt"></i></span>
            Produtos
          </router-link>
        </li>
        <li class="mb-4">
          <router-link :to="{ name: 'clients' }" class="flex items-center text-white">
            <span class="mr-2"><i class="fa-solid fa-users-viewfinder"></i></span>
            Clientes
          </router-link>
        </li>
        <li class="mb-4">
          <router-link :to="{ name: 'vends' }" class="flex items-center text-white">
            <span class="mr-2"><i class="fa-solid fa-sack-dollar"></i></span>
            Vendas
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'relators' }" class="flex items-center text-white">
            <span class="mr-2"><i class="fa-solid fa-chart-line"></i></span>
            Relatórios
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  setup() {
    return {};
  },
};
</script>

<style>
</style>
