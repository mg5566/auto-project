<template>
  <div
    v-if="isOpen"
    class="background"
    @click="handleClose"
    @dragover="handleDragOver"
  ></div>
  <Panel
    v-if="isOpen"
    :widgetList="widgetList"
    @dragForAddWidget="handleDrag"
    @dragEnd="handleDragEnd"
  />
  <PlusButton v-if="!isOpen" class="position" @click="handleOpen"/>
</template>

<script setup>
  import { ref } from 'vue';
  import PlusButton from './buttons/PlusButton/PlusButton.vue';
  import Panel from './Panel.vue';
  import { dummyWidgetList } from './Dashboard/WidgetList.js';

  const emit = defineEmits({
    dragForAddWidget: () => true,
    dragEnd: () => true,
    /**
     *
     * @param {DragEvent} event
     */
    dragOver: (event) => {
      if (event) {
				return true;
			}
      console.warn('Invalid dragOver event payload')
			return false;
    }
  })

  const isOpen = ref(false);

  const handleDrag = () => {
    emit('dragForAddWidget');
  }
  const handleDragEnd = () => {
    emit('dragEnd');
  }

  /**
   *
   * @param {DragEvent} event
   */
  const handleDragOver = (event) => {
    emit('dragOver', event);
  }

  const handleOpen = () => {
    isOpen.value = true;
  }

  const handleClose = () => {
    isOpen.value = false;
  }

  // fetch widget list
  const widgetList = ref(dummyWidgetList);
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
