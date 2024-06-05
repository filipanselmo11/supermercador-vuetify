<script lang="ts" setup>
const props = defineProps<{
  text: string,
  title: string,
  type: string,
}>();
</script>

<template>
  <v-responsive
    class="mx-auto"
    max-width="344">
    <v-alert
      :text="props.text"
      :title="props.title"
      :type="props.type">
    </v-alert>
  </v-responsive>
</template>
