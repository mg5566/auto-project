<template>
  <div class="title-select-container">
    <div>{{ title }}</div>
    <div>
      <el-select v-model="selectedValue">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  });

  const emit = defineEmits({
    /**
     *
     * @param {string} value
     */
     'update:modelValue': (value) => {
      if (value && typeof value === 'string') {
        return true;
      }
      console.error('Invalid update:modelValue event payload')
      return false;
    },
  });

  const selectedValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })
</script>

<style scoped lang="scss">
  .title-select-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :deep(.el-input) {
      width: 7rem;
    }
  }
</style>
