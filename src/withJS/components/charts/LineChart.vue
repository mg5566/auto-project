<template>
  <div>
    임시 line chart component
  </div>
  <BaseChart :option="lineChartOption" />
</template>

<script setup>
  import { computed } from 'vue';
  import BaseChart from './BaseChart.vue';

  const props = defineProps({
    lineChartData: {
      type: Object,
      required: true,
    },
  });

  const lineChartOption = computed(() => {
    return {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: props.lineChartData.columns.map((column) => column.label),
      },
      yAxis: {
        type: 'value',
      },
      series: props.lineChartData.rows.map((row) => ({
        type: 'line',
        name: row.name,
        data: row.data,
      })),
    };
  })
</script>
