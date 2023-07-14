<template>
  <el-dialog v-model="isOpen">
    <template #header>
      <div>test {{ selectedWidget?.panelName }}</div>
    </template>
    <!-- color 변경 -->
    <!-- align 변경 -->
    <div class="align">
      <TitleSelect
        v-for="(column, index) in columns"
        :key="index"
        :title="column.label"
        :options="options"
        v-model="aligns[index]"
      />
    </div>
    <template #footer>
      <el-button type="warning" @click="handleClose">close</el-button>
      <el-button type="primary" @click="handleSave">save</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
  import { computed, ref, watch } from 'vue';
  import TitleSelect from '../select/TitleSelect/TitleSelect.vue';
  import { useLayoutStore } from '../../../store/useLayoutStore';

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    selectedWidget: {
      type: Object,
      required: true
    }
  });

  const emit = defineEmits(['update:modelValue']);

  const isOpen = computed({
    get() {
      return props.modelValue;
    },
    /**
     *
     * @param {boolean} value
     */
    set(value) {
      emit('update:modelValue', value);
    }
  })

  const columns = computed(() => {
    const tempData = props.selectedWidget.columns;
    return tempData;
  })

  const aligns = ref(props.selectedWidget.columns.map((item) => item.align ?? 'left'));
  watch(columns, () => {
    if (columns) {
      columns.value.forEach((column) => {
        aligns.value?.push(column.align ?? 'left');
      });
    }
  });

  const options = [
    {
      label: 'left',
      value: 'left',
    },
    {
      label: 'center',
      value: 'center',
    },
    {
      label: 'right',
      value: 'right',
    },
  ]

  const layoutStore = useLayoutStore();
  const handleSave = () => {
    layoutStore.updateColumnsAligns(props.selectedWidget.i.toString(), aligns.value);

    aligns.value = [];
    emit('update:modelValue', false);
  }

  const handleClose = () => {
    aligns.value = [];
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
