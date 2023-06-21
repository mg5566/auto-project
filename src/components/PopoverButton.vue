<template>
  <div
    v-if="isOpen"
    class="background"
    @click="handleClose"
  ></div>
  <div
    v-if="isOpen"
    class="controller"
    :draggable="true"
    @dragstart="handleDragAndCopy"
  >
    추가해보든가.
  </div>
  <button v-if="!isOpen" class="trigger" @click="handleOpen">클릭하면 터진다.</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const handleDragAndCopy = (event: DragEvent) => {
  console.log('드래그 시작');
  console.log('드래그 시작 이벤트', event);
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
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    /* 항상 최하단 오른쪽에 배치한다. */
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  .trigger {
    /* 항상 최하단 오른쪽에 배치한다. */
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 2rem;
    border-radius: 4rem;
  }
</style>
