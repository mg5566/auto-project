<template>
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
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { SelectOptions } from './TitleSelect.type';

  interface Props {
    title: string;
    options: SelectOptions;
    modelValue: string | undefined;
  }
  const props = defineProps<Props>();

  interface Emits {
    /**
     * value 가 string | undefined 인 이유
     *
     * value?: string 으로 해도 동일하게 해석된다. 그러나 개발자가 value 를 받아들이는 의미는 차이가 있을 수 있음.
     * value?: string 은 value 를 전달하지 않을 수도 있다는 의미이고,
     * value: sring | undefined 는 2번째 argument 를 무조건 전달하는데, undefined 와 string 둘 중 하나를 전달한다는 의미이다.
     */
    (e: 'update:modelValue', value: string | undefined): void;
  }
  const emit = defineEmits<Emits>();

  const selectedValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })
</script>
