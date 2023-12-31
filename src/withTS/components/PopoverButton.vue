<template>
  <!-- background 영역 -->
  <div
    v-if="isOpen"
    class="background"
    @click="handleClose"
    @dragover="handleDragOver"
  ></div>
  <!-- Panel List -->
  <Panel
    v-loading="isLoading"
    v-if="isOpen"
    :widgetList="widgetList"
    @dragForAddWidget="handleDrag"
    @dragEnd="handleDragEnd"
  />
  <!-- Plus Button -->
  <PlusButton v-if="!isOpen" class="position" @click="handleOpen"/>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import PlusButton from './buttons/PlusButton/PlusButton.vue';
  import Panel from './Panel.vue';
  import { usePanels } from '../../services/usePanels';
  import { WidgetData } from './Widget/WidgetList.type';

  interface Emits {
    (event: 'dragForAddWidget', widget: WidgetData): void;
    (event: 'dragEnd'): void;
    (event: 'dragOver', value: DragEvent): void;
  }
  const emit = defineEmits<Emits>();

  const isOpen = ref(false);

  const handleDrag = (widget: WidgetData) => {
    emit('dragForAddWidget', widget);
  }
  const handleDragEnd = () => {
    emit('dragEnd');
  }

  const handleDragOver = (event: DragEvent) => {
    emit('dragOver', event);
  }

  const handleOpen = () => {
    isOpen.value = true;
  }

  const handleClose = () => {
    isOpen.value = false;
  }

  // fetch Panel list
  const { data, isLoading } = usePanels(computed(() => true));
  const widgetList = computed(() => {
    const tempData = data.value ?? [];
    return tempData;
  });
</script>

<style scoped>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .position {
    /* 항상 최하단 오른쪽에 배치한다. */
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
</style>
