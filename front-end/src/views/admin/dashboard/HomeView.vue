<template>
  <div>
    <dashboard-component>
      <template #slot-pages>
        <div class="content">
          <header class="text-base">Pagina Home View</header>
          <div class="flex flex-wrap">
            <div class="w-full mr-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <CardsComponents
                :bgColor="'bg-green-200'"
                :type="'Clientes'"
                :iconScore="'fa-arrow-up'"
                :percentagem="'7'"
                :iconPercentagem="'fa-percent'"
                :iconCard="'fa-users'"
                :qtd="'9570'"
              />
            </div>
            <div class="w-full mr-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <CardsComponents
                :bgColor="'bg-indigo-200'"
                :type="'Produtos'"
                :iconScore="'fa-arrow-up'"
                :percentagem="'12'"
                :iconPercentagem="'fa-percent'"
                :iconCard="'fa-box'"
                :qtd="'350'"
              />
            </div>
            <div class="w-full mr-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <CardsComponents
                :bgColor="'bg-violet-200'"
                :type="'Serviços'"
                :iconScore="'fa-arrow-up'"
                :percentagem="'25'"
                :iconPercentagem="'fa-percent'"
                :iconCard="'fa-store'"
                :qtd="'270'"
              />
            </div>
            <div class="w-full mr-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
               <CardsComponents
                :bgColor="'bg-cyan-200'"
                :type="'Relatórios'"
                :iconScore="'fa-arrow-up'"
                :percentagem="'14'"
                :iconCard="'fa-history'"
                :qtd="'56'"
              />
            </div>
          </div>
        </div>
      </template>
    </dashboard-component>
  </div>
</template>

<script>
import CardsComponents from "../../../components/cards/CardsComponents.vue";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";

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

