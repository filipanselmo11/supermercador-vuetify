<script lang="ts" setup>
import { useProductStore } from '../stores/ProductStore';
import DataTable from '../components/DataTable.vue';
import Progress from '../components/Progress.vue';
import { onMounted } from 'vue';

const productStore = useProductStore();
onMounted(() => {
  productStore.getProducts();
});
const headers = ['Id', 'Nome', 'Disponível', 'Quantidade', 'Preço(R$)'];
</script>

<template>
  <section>
    <div class="d-flex justify-center mt-15">
      <h2 class="text-h2">Produtos</h2>
    </div>
    <div class="d-flex justify-center">
      <Progress v-if="productStore.loading" />
      <DataTable v-else :headers="headers.value" :items="productStore.products" />
    </div>
  </section>
</template>
