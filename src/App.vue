<template>
  <div class="app-container">
    <NavBar class="app-container__header" />
    <div class="app-container__body">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
  import NavBar from './withTS/components/NavBar/NavBar.vue';
</script>

<style scoped lang="scss">
  .app-container {
    display: flex;
    flex-direction: column;

    &__header {
      position: sticky;
      top: 0;
      z-index: 100;
      width: auto;
    }

    &__body {
      padding: 1.5rem;
    }
  }
</style>
