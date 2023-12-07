<template>
  <div>
    <dashboard-component>
      <template #slot-pages>
        <div class="content">
          <!-- <header class="text-base">Home</header> -->
          <div class="flex flex-wrap">
            <div class="w-full mr-5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <CardsComponents
                :bgColor="'bg-green-200'"
                :type="'Clientes'"
                :iconScore="'fa-arrow-up'"
                :percentagem="'7'"
                :iconPercentagem="'fa-percent'"
                :iconCard="'fa-users'"
                :qtd="clientes.length"
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
                :qtd="products.length"
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
                :iconCard="'fa-file-text'"
                :qtd="'56'"
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div
            class="w-1/2 p-2 mt-6 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow max-h-96 sm:p-2 dark:bg-gray-800 dark:border-gray-700 mr-3"
          >
            <ListComponent :data="clientes" :title="'Clientes'" :description="{ optOne: 'Nome', optTwo: 'E-mail' }" />
          </div>
          <div
            class="w-1/2 p-2 mt-6  overflow-y-auto bg-white border border-gray-200 rounded-lg shadow max-h-96 sm:p-2 dark:bg-gray-800 dark:border-gray-700"
          >
           <ListComponent :data="products" :title="'Produtos'" :description="{ optOne: 'Nome', optTwo: 'Valor' }" />
          </div>
        </div>
      </template>
    </dashboard-component>
  </div>
</template>

<script>
import axios from "axios";
import CardsComponents from "../../../components/cards/CardsComponents.vue";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";
import ListComponent from "../../../components/lists/ListComponent.vue";

export default {
  name: "HomeView",
  components: { DashboardComponent, CardsComponents, ListComponent },
  data() {
    return {
      clientes: [],
      products:[],
    };
  },
  methods: {
    async getDatas() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/home"
        );
        this.clientes = [...response.data.clientes];
        this.products = [...response.data.products];

      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getDatas();
  },
};
</script>


<style scoped>
</style>

