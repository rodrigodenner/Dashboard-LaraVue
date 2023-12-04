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
                :iconCard="'fa-file-text'"
                :qtd="'56'"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            class="w-3/5 p-2 mt-3 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow max-h-60 sm:p-2 dark:bg-gray-800 dark:border-gray-700"
          >
            <ListComponent/>
          </div>
        </div>
      </template>
    </dashboard-component>
  </div>
</template>

<script>
import axios from 'axios';

import CardsComponents from "../../../components/cards/CardsComponents.vue";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";
import ListComponent from "../../../components/lists/ListComponent.vue";

export default {
  name: "HomeView",
  components: { DashboardComponent, CardsComponents, ListComponent },
  data() {
    return {
      users:[],
    };
  },
  methods: {
     async getUsers(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data);
    }
  },
  mounted() {
    this.getUsers();
  },
};
</script>


<style scoped>
</style>

