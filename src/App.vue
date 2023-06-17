<template>
  <div class="app-container">
    <DashboardLayout />
  </div>
</template>

<script setup lang="ts">
  import DashboardLayout from './components/DashboardLayout.vue'
</script>

<style scoped>
  .app-container {
    width: 80%;
    height: 80%;

    :deep(.vue-grid-item) {
      touch-action: none;
      box-sizing: border-box;
    }
  }
</style>
