<script setup>
  import { ref } from 'vue'
  import { GridLayout } from 'grid-layout-plus'
  import PopoverButton from '../PopoverButton.vue';
  import { useGridLayout } from './composable';

  const layout = ref([
    { x: 0, y: 0, w: 2, h: 2, i: '0' },
    { x: 2, y: 0, w: 2, h: 4, i: '1' },
    { x: 4, y: 0, w: 2, h: 5, i: '2' },
    { x: 6, y: 0, w: 2, h: 3, i: '3' },
    { x: 8, y: 0, w: 2, h: 3, i: '4' },
  ])
  const wrapper = ref()
  const gridLayout = ref();

  const {
    handleDrag,
    handleDragOver,
    handleDragEnd
  } = useGridLayout(layout, wrapper, gridLayout);
</script>

<template>
  <div class="dashboard-layout">
    <div class="dashboard-layout__info">
      Displayed as [x, y, w, h]:
      <div class="columns">
        <div v-for="item in layout" :key="item.i">
          <b>{{ item.i }}</b>: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
        </div>
      </div>
    </div>
    <div ref="wrapper">
      <GridLayout ref="gridLayout" v-model:layout="layout" :row-height="30">
        <template #item="{ item }">
          <span class="text">{{ item.i }}</span>
        </template>
      </GridLayout>
    </div>
  </div>
  <PopoverButton
    @drag-for-add-widget="handleDrag"
    @drag-end="handleDragEnd"
    @drag-over="handleDragOver"
  />
</template>

<style scoped lang="scss">
.dashboard-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__info {
    padding: 10px;
    background-color: #ddd;
    border: 1px solid black;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
}

.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}
</style>
