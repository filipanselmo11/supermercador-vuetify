<script lang="ts" setup>
const props = defineProps<{
  label: string,
  placeholder: string,
  type: string
}>();
</script>


<template>
  <v-responsive
    class="mx-auto"
    max-width="344">
    <v-text-field
      hide-details="auto"
      :label="props.label"
      :placeholder="props.placeholder"
      :type="props.type"></v-text-field>
  </v-responsive>
</template>
