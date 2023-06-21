<template>
  <div class="dashboard-layout" @dragend="handleAddWidget">
    <PopoverButton />
      <!-- Default slot usage -->
    <GridLayout
      v-model:layout="layout"
      @layout-updated="handleUpdateLayout"
    >
      <GridItem
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <div class="grid-item">
          {{ item.i }}
        </div>
      </GridItem>
    </GridLayout>
  </div>
</template>

<script setup lang="ts">
  import PopoverButton from './PopoverButton.vue';
  import { reactive } from 'vue'
  import { GridLayout, GridItem, Layout } from 'grid-layout-plus'

  const layout = reactive<Layout>([
    { x: 0, y: 0, w: 2, h: 2, i: '0' },
    { x: 2, y: 0, w: 2, h: 4, i: '1' }
  ])

  const handleAddWidget = (event: DragEvent) => {
    console.log('위젯을 추가한다.');
    console.log('드래그 종료 이벤트', event.clientX, event.clientY);
  }
  const handleUpdateLayout = (event: Layout) => {
    console.log('update 가 됩니다.', event);
  }
</script>

<style scoped>
  .dashboard-layout {
    width: 100%;
    height: 100%;
  }

  .grid-item {
    color: black;
    background-color: #ccc;

    width: 100%;
    height: 100%;
    /* text 가 가운데에 정렬된다. */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
