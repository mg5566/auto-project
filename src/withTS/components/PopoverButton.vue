<template>
  <div
    v-if="isOpen"
    class="background"
    @click="handleClose"
    @dragover="handleDragOver"
  ></div>
  <div
    v-if="isOpen"
    class="controller"
    :draggable="true"
    @drag="handleDrag"
    @dragend="handleDragEnd"
  >
    drag me.
  </div>
  <PlusButton v-if="!isOpen" class="position" @click="handleOpen"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlusButton from './buttons/PlusButton/PlusButton.vue';

interface Emits {
  (event: 'dragForAddWidget'): void;
  (event: 'dragEnd'): void;
  (event: 'dragOver', value: DragEvent): void;
}
const emit = defineEmits<Emits>();

const isOpen = ref(false);

const handleDrag = () => {
  emit('dragForAddWidget');
}
const handleDragEnd = () => {
  emit('dragEnd');
}

const handleDragOver = (event: DragEvent) => {
  emit('dragOver', event);
}

const handleOpen = () => {
  console.log('열렸다.')
  isOpen.value = true;
}

const handleClose = () => {
  console.log('닫는다.');
  isOpen.value = false;
}
</script>

<style scoped>
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: blanchedalmond; */
  }

  .controller {
    width: 126px;
    height: 70px;
    background-color: aquamarine;
    /* 항상 최하단 오른쪽에 배치한다. */
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  .position {
    /* 항상 최하단 오른쪽에 배치한다. */
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
</style>
