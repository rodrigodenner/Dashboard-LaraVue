<template>
  <div>
   <dashboard-component>
     <template #slot-pages>
        <div class="content">
          Pagina Home View
        </div>
      </template>
   </dashboard-component>
  </div>
</template>

<script>
import DashboardComponent from '../../../components/dashboard/DashboardComponent.vue'

export default {
  name: 'HomeView',
  components: { DashboardComponent },
  data() {
    return {}
  }
}
</script>


<style scoped>

</style>