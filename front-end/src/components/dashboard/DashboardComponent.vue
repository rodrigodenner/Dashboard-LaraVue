<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-48 h-screen bg-yellow-800">
      <SidebarComponent/>
    </div>

    <!-- Content Right -->
    <div class="flex flex-col flex-1">
      <!-- Navbar -->
      <div class="w-full py-4 bg-yellow-600">
        <NavbarComponent/>
      </div>

      <!-- Pages -->
      <div class="flex-1 bg-yellow-400">
        <ContentComponet/>
      </div>
    </div>
  </div>
</template>

<script>
import ContentComponet from './ContentComponet.vue';
import NavbarComponent from './NavbarComponent.vue';
import SidebarComponent from './SidebarComponent.vue';

export default {
  components: { 
    SidebarComponent, 
    NavbarComponent, 
    ContentComponet },
  name: 'DashboardComponent',
  setup() {
    return {};
  },
};
</script>

<style scoped>
/* No need for styling here, as Tailwind CSS classes are used in the template */
</style>
