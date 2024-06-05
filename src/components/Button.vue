<script lang="ts" setup>
const props = defineProps<{
  textButton: string,
  size: string
}>();
</script>

<template>
  <v-responsive
    class="mx-auto"
    max-width="344">
    <v-btn :size="props.size">
      {{ props.textButton }}
    </v-btn>
  </v-responsive>
</template>
