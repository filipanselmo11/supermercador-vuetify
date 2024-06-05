<script lang="ts" setup>
import { useProductStore } from '../stores/ProductStore';
import DataTable from '../components/DataTable.vue';
import Progress from '../components/Progress.vue';
import { onMounted } from 'vue';

const productStore = useProductStore();
onMounted(() => {
  console.log('OLÁ');
  productStore.getProducts();
});
const headers = ['id', 'nome', 'disponivel', 'quantidade'];
</script>

<template>
  <div class="d-flex justify-center mt-15">
    <Progress v-if="productStore.loading"/>
    <DataTable v-else :headers="headers.value" :items="productStore.products"/>
  </div>
</template>
