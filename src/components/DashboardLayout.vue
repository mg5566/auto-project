<template>
  <div class="dashboard-layout" @dragend="handleAddWidget">
    <PopoverButton />
  </div>
</template>

<script setup lang="ts">
  import PopoverButton from './PopoverButton.vue';

  const handleAddWidget = (event: DragEvent) => {
    console.log('위젯을 추가한다.');
    console.log('드래그 종료 이벤트', event.clientX, event.clientY);
  }
</script>

<style scoped>
  .dashboard-layout {
    width: 100%;
    height: 100%;
  }
</style>
