<template>
  <div class="divider"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

  interface Props {
    margin?: number;
    height?: number;
  }
  const props = withDefaults(defineProps<Props>(), {
    margin: 1,
    height: 2,
  });

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
