<template>
  <div class="pannel">
    <div class="pannel__header">
      pannel
    </div>
    <Divider :margin="4" />
    <!-- panel list -->
    <div class="pannel__body">
      <PanelItem
        v-for="widget in widgetList"
        :key="widget.panelId"
        :draggable="true"
        @drag="handleDrag"
        @dragend="handleDragEnd"
      >
        {{ widget.panelName }}
      </PanelItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import PanelItem from './PanelItem.vue';
  import { Widget } from './Dashboard/WidgetList.type';
  import Divider from './Divider/Divider.vue';

  interface Props {
    widgetList: Widget[];
  }
  defineProps<Props>();

  interface Emits {
    (event: 'dragForAddWidget'): void;
    (event: 'dragEnd'): void;
  }
  const emit = defineEmits<Emits>();

  const handleDrag = () => {
    emit('dragForAddWidget');
  }
  const handleDragEnd = () => {
    emit('dragEnd');
  }
</script>

<style scoped lang="scss">
  .pannel {
    width: 16rem;
    height: 8rem;
    /* 항상 최하단 오른쪽에 배치한다. */
    position: fixed;
    bottom: 1rem;
    right: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid black;

    &__header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__body {
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 0.2rem;
    }
  }
</style>
