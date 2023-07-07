<template>
  <div class="dashboard-layout">
    <div class="dashboard-layout__info">
      Displayed as [x, y, w, h]:
      <div class="columns">
        <div v-for="item in layoutStore.layout" :key="item.i">
          <b>{{ item.i }}</b>: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
        </div>
      </div>
    </div>
    <div ref="wrapper">
      <GridLayout ref="gridLayout" v-model:layout="layoutStore.layout" :row-height="30">
        <GridItem
          v-for="item in layoutStore.layout"
          :key="item.i"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :min-w="3"
          :min-h="4"
        >
          <Widget
            :widget-id="item.panelId"
          />
        </GridItem>
      </GridLayout>
    </div>
  </div>
  <PopoverButton
    @drag-for-add-widget="handleDrag"
    @drag-end="handleDragEnd"
    @drag-over="handleDragOver"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import { GridLayout, GridItem } from 'grid-layout-plus'
  import PopoverButton from '../PopoverButton.vue';
  import { useGridLayout } from './composable';
  import Widget from '../Widget/Widget.vue';

  const wrapper = ref()
  const gridLayout = ref();

  const {
    layoutStore,
    handleDrag,
    handleDragOver,
    handleDragEnd
  } = useGridLayout(wrapper, gridLayout);
</script>

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
  min-height: 20rem;
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
