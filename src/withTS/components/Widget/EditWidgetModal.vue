<template>
  <el-dialog v-model="isOpen">
    <template #header>
      <div>test {{ selectedWidget?.panelName }}</div>
    </template>
    <!-- color 변경 -->
    <!-- align 변경 -->
    <template #footer>
      <el-button type="warning" @click="handleClose">close</el-button>
      <el-button type="primary" @click="handleSave">save</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import TitleSelect from '../select/TitleSelect/TitleSelect.vue';
  import { LayoutStore, useLayoutStore } from '../../../store/useLayoutStore';

  interface Props {
    modelValue: boolean;
    selectedWidget: LayoutStore;
  }
  const props = defineProps<Props>();

  interface Emits {
    (e: 'update:modelValue', value: boolean): void;
  }
  const emit = defineEmits<Emits>();

  const isOpen = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    }
  })
  const handleSave = () => {
    emit('update:modelValue', false);
  }

  const handleClose = () => {
    console.log('close');

    emit('update:modelValue', false);
  }
</script>

<style scoped lang="scss">
  .align {
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 1rem;
  }
</style>
