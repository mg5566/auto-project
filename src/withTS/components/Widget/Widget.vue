<template>
  <div class="widget">
    <!-- header -->
    <div class="widget__header">
      <div>{{ wigetTitle }}</div>
    </div>
    <!-- body -->
    <div class="widget__body">
      <PieChart v-if="pieChart" :pieChartData="pieChart" />
      <GridTable v-if="gridTable" :tableData="gridTable" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { usePanel } from '../../../services/usePanel';
  import GridTable from '../table/GridTable/GridTable.vue';
  import PieChart from '../charts/PieChart.vue';
  import { LayoutStore } from '../../../store/useLayoutStore';

  interface Props {
    widget: LayoutStore;
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
  // const { data, isLoading } = usePanel(props.widget, computed(() => !!props.widgetId));

  const wigetTitle = computed(() => {
    const title = props.widget.panelName;
    return title;
  })

  const pieChart = computed(() => {
    if (props.widget.panelType === 'PIE_CHART') {
      return props.widget;
    }
    return undefined
  })
  const gridTable = computed(() => {
    if (props.widget.panelType === 'GRID') {
      return props.widget;
    }
    return undefined
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
