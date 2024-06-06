<script lang="ts" setup>
const props = defineProps<{
  headers: any,
  items: any
}>();
</script>

<template>
    <v-data-table-virtual
      class="mt-15"
      :headers="props.headers"
      :items="props.items"
      height="510"
      item-value="name">
    </v-data-table-virtual>
</template>
