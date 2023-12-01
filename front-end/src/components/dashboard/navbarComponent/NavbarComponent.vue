<template>
  <div class="lg:flex lg:justify-between p-4">
    <div class="text-white logo text-center lg:text-left mb-4 lg:mb-0">
      <p><i class="fa fa-star"></i> Logo Marca</p>
    </div>
    <div class="text-white logout text-center lg:text-right">
      <a href="" @click.prevent="logout">Sair <i class="fa-solid fa-right-from-bracket"></i></a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {};
  },
  methods: {
    logout(){
      this.$router.push({name: 'login'});
    }
  },
};
</script>

<style scoped>

</style>
