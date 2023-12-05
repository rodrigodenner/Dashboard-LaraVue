<template>
  <div>
   <dashboard-component>
     <template #slot-pages>
        <div class="content">
          <header class="title">
            Pagina Clientes View
          </header>
        </div>
      </template>
   </dashboard-component>
  </div>
</template>

<script>


import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";

export default {
  name: 'ProductsView',
  components: { DashboardComponent },
  data() {
    return {}
  }
}
</script>


<style scoped>

</style>