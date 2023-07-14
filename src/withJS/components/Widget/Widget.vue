<template>
  <div class="widget">
    <!-- header -->
    <div class="widget__header">
      <div>{{ wigetTitle }}</div>
      <button v-if="gridTable" @click="handleOpenEditor">edit</button>
    </div>
    <!-- body -->
    <div class="widget__body">
      <PieChart v-if="pieChart" :pieChartData="pieChart" />
      <GridTable v-if="gridTable" :tableData="gridTable" />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { usePanel } from '../../../services/usePanel';
  import GridTable from '../table/GridTable/GridTable.vue';
  import PieChart from '../charts/PieChart.vue';

  const props = defineProps({
    widget: {
      type: Object,
      required: true
    }
  });

  const emit = defineEmits({
    'openWidgetEditor': (widget) => {
      if (widget && typeof widget === 'object') {
        return true;
      }
      console.error('Invalid openWidgetEditor event payload')
      return false;
    },
  });

  const handleOpenEditor = () => {
    console.log('click edit');
    emit('openWidgetEditor', props.widget);
  };

  /**
   * fetch Panel
   */
  // const { data, isLoading } = usePanel(props.widgetId, computed(() => !!props.widgetId));

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
