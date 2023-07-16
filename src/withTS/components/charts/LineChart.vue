<template>
  <div>
    임시 line chart component
  </div>
  <BaseChart :option="lineChartOption" />
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import BaseChart from './BaseChart.vue';
  import { EChartsOption } from 'echarts';
  import { LineChartData } from './LineChart.type';

  interface Props {
    lineChartData: LineChartData;
  }
  const props = defineProps<Props>();

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
    } as EChartsOption;
  })
</script>
