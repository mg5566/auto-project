<template>
  <div
    v-if="isOpen"
    class="background"
    @click="handleClose"
    @dragover="handleDragOver"
  ></div>
  <Panel
    v-loading="isLoading"
    v-if="isOpen"
    :widgetList="widgetList"
    @dragForAddWidget="handleDrag"
    @dragEnd="handleDragEnd"
  />
  <PlusButton v-if="!isOpen" class="position" @click="handleOpen"/>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import PlusButton from './buttons/PlusButton/PlusButton.vue';
  import Panel from './Panel.vue';
  import { usePanels } from '../../services/usePanels';

  const emit = defineEmits({
    /**
     *
     * @param {object} widget
     */
    dragForAddWidget: (widget) => {
      if (widget) {
        return true;
      }
      console.warn('Invalid dragForAddWidget event payload')
      return false;
    },
    dragEnd: () => true,
    /**
     *
     * @param {DragEvent} value
     */
    dragOver: (value) => {
      if (value) {
				return true;
			}
      console.warn('Invalid dragOver event payload')
			return false;
    }
  })

  const isOpen = ref(false);

  /**
   *
   * @param {object} widget
   */
  const handleDrag = (widget) => {
    emit('dragForAddWidget', widget);
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
