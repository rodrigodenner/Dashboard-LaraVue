<template>
  <div>
   <dashboard-component>
     <template #slot-pages>
        <div class="content">
          <header class="title">
            Pagina Vends View
          </header>
        </div>
      </template>
   </dashboard-component>
  </div>
</template>

<script>


import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";

export default {
  name: 'VendsView', 
  components: { DashboardComponent },
  data() {
    return {}
  }
}
</script>


<style scoped>

</style>