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
  import { ref, computed } from 'vue';
  import PlusButton from './buttons/PlusButton/PlusButton.vue';
  import Panel from './Panel.vue';
  import { usePanels } from '../../services/usePanels';

  const emit = defineEmits({
    /**
     *
     * @param {string} id
     */
    dragForAddWidget: (id) => {
      if (id) {
        return true;
      }
      console.warn('Invalid dragForAddWidget event payload')
      return false;
    },
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

  /**
   *
   * @param {string} id
   */
  const handleDrag = (id) => {
    emit('dragForAddWidget', id);
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
  const { data: widgetList, isLoading } = usePanels(computed(() => true));
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
