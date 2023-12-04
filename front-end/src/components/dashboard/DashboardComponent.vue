<template>
  <div class="flex bg-gray-200">
    <!-- Sidebar -->
    <div class="w-48 h-screen text-white bg-slate-600">
      <SidebarComponent/>
    </div>

    <!-- Content Right -->
    <div class="flex flex-col flex-1">
      <!-- Navbar -->
      <div class="w-full py-4 bg-slate-500">
        <NavbarComponent/>
      </div>

      <!-- Pages -->
      <div class="flex-1 ">
        <div class="p-5">
          <slot name="slot-pages"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavbarComponent from './navbarComponent/NavbarComponent.vue';
import SidebarComponent from './sidebarComponent/SidebarComponent.vue';



export default {
  components: {
    SidebarComponent,
    NavbarComponent
  },
  name: 'DashboardComponent',
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* No need for styling here, as Tailwind CSS classes are used in the template */
</style>