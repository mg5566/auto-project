<template>
  <div class="divider"></div>
</template>

<script setup>
  import { computed } from 'vue';

  // All props are optional by default, unless required: true is specified.
  const props = defineProps({
    margin: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
      default: 2,
    },
  })

  const margin = computed(() => `${props.margin}px`);
  const height = computed(() => `${props.height}px`)
</script>

<style scoped lang="scss">
  .divider {
    width: 100%;
    height: 1px;
    background-color: black;

    margin: v-bind(margin) 0;
    height: v-bind(height);
  }
</style>
