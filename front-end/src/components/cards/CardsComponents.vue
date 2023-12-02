<template>
  <div class="flex flex-col my_card md:w-full">
    <div class="top mb-4">
      <h3 class="text-lg font-bold">Clientes</h3>
      <p class="percentagem flex items-center">
        <i class="fas fa-arrow-up text-green-500 mr-1"></i> 7
        <i class="fa-thin fa-percent"></i>
      </p>
    </div>
    <div class="footer flex items-center">
      <span class="text-2xl mr-2">
        <i class="fas fa-users"></i>
      </span>
      <p class="qtd text-xl">9570</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.my_card {
  margin-top: 20px;
  background-color: rgb(177, 241, 212);
  padding: 15px;
  border-radius: 7px;
  color: rgb(42, 42, 42);
  
}

.top,
.footer {
  display: flex;
  justify-content: space-between;
}

.top {
  margin-bottom: 20px;
}

.percentagem i {
  font-size: 18px;
}

.footer span {
  font-size: 20px;
}
</style>
