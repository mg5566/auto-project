<template>
  <div class="widget">
    <!-- header -->
    <div class="widget__header">
      <div>{{ wigetTitle }}</div>
      <!-- TODO: edit button -->
      <button v-if="gridTable" @click="handleOpenEditor">edit</button>
    </div>
    <!-- body -->
    <div class="widget__body">
      <LineChart v-if="lineChart" :line-chart-data="lineChart" />
      <PieChart v-if="pieChart" :pieChartData="pieChart" />
      <GridTable v-if="gridTable" :tableData="gridTable" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import GridTable from '../table/GridTable/GridTable.vue';
  import PieChart from '../charts/PieChart.vue';
  import LineChart from '../charts/LineChart.vue';
  import { LayoutStore } from '../../../store/useLayoutStore';

  interface Props {
    widget: LayoutStore;
  }
  const props = defineProps<Props>();

  interface Emits {
    (e: 'openWidgetEditor', widget: LayoutStore): void;
  }
  const emit = defineEmits<Emits>();

  const handleOpenEditor = () => {
    console.log('click edit');
    emit('openWidgetEditor', props.widget);
  };

  /**
   * fetch Panel
   */
  // const { data, isLoading } = usePanel(props.widget, computed(() => !!props.widgetId));

  const wigetTitle = computed(() => {
    const title = props.widget.panelName;
    return title;
  })

  const lineChart = computed(() => {
    if (props.widget.panelType === 'LINE_CHART') {
      return props.widget;
    }
    return undefined
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
