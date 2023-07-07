<template>
  <div class="widget">
    <!-- header -->
    <div class="widget__header">
      <div>{{ wigetTitle }}</div>
    </div>
    <!-- body -->
    <div class="widget__body">
      <!-- TODO: HOC 적용하기 -->
      <GridTable v-loading="isLoading" :tableData="tableData" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { usePanel } from '../../../services/usePanel';
  import GridTable from '../table/GridTable/GridTable.vue';
  import { TableData } from '../table/GridTable/GridTable';

  interface Props {
    widgetId: string;
  }
  const props = defineProps<Props>();

  // interface Emits {
  //   (e: 'openWidgetEditor', id: string): void;
  // }
  // const emit = defineEmits<Emits>();

  // const handleOpenEditor = () => {
  //   console.log('click edit');
  //   emit('openWidgetEditor', props.widgetId);
  // };

  /**
   * fetch Panel
   */
  const { data, isLoading } = usePanel(props.widgetId, computed(() => !!props.widgetId));

  const wigetTitle = computed(() => {
    const title = data.value?.panelName;
    return title;
  })
  const tableData = computed<TableData>(() => {
    const tempData = data.value ?? { columns: [], rows: [] } as TableData;
    return tempData;
  })
</script>

<style scoped lang="scss">
  .widget {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__header {
      height: 30px;
      background-color: #ddd;

      display: flex;
      justify-content: space-between;

      padding: 0 1rem;

      &__edit {
        cursor: pointer;
        border: 1px solid black;
      }
    }

    &__body {
      flex:1;
      overflow: hidden;
      background-color: #eee;
    }
  }
</style>
