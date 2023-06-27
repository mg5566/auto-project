<template>
  <NavBar class="app-header" />
  <div class="app-body">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import NavBar from './withTS/components/NavBar/NavBar.vue';
</script>

<style scoped lang="scss">
  .app-header {
    position: sticky;
    top: 0;
    z-index: 100;
    width: auto;
  }

  .app-body {
    padding: 1.5rem;
  }
</style>
