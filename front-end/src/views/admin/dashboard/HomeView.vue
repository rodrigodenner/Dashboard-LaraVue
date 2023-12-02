<template>
  <div>
    <dashboard-component>
      <template #slot-pages>
        <div class="content">
          <header class="text-base">Pagina Home View</header>
          <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mr-5">
              <CardsComponents />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mr-5">
              <CardsComponents />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mr-5">
              <CardsComponents />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mr-5">
              <CardsComponents />
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mr-5">
              <CardsComponents />
            </div>
          </div>
        </div>
      </template>
    </dashboard-component>
  </div>
</template>

<script>
import CardsComponents from "../../../components/cards/CardsComponents.vue";
import DashboardComponent from "../../../components/dashboard/DashboardComponent.vue";

export default {
  name: "HomeView",
  components: { DashboardComponent, CardsComponents },
  data() {
    return {};
  },
};
</script>


<style scoped>
</style>

