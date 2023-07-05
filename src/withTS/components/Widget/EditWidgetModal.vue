<template>
  <el-dialog v-model="isOpen">
    <div>test {{ selectedWidget }}</div>
  </el-dialog>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface Props {
    modelValue: boolean;
    selectedWidget: string;
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
</script>

<style scoped lang="scss">
</style>
