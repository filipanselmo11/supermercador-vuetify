<script lang="ts" setup>
const props = defineProps<{
  headers: any,
  items: any
}>();
</script>

<template>
  <v-data-table-virtual
    :headers="props.headers"
    :items="props.items"
    height="400"
    item-value="name"></v-data-table-virtual>
</template>
