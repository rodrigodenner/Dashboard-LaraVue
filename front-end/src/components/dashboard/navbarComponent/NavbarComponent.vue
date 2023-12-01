<template>
  <div class="flex justify-between p-4">
    <div class="text-white logo">
      <p><i class="fa fa-star"></i> Logo Marca</p>
    </div>
    <div class="text-white logout">
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
