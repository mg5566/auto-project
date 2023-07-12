<template>
  <BaseChart :option="pieOption" />
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import BaseChart from './BaseChart.vue';
  import { PieChartData } from './PieChart.type';
import { EChartsOption } from 'echarts';

  interface Props {
    pieChartData: PieChartData
  }
  const props = defineProps<Props>();

  const pieOption = computed<EChartsOption>(() => {
    return {
      tooltip: {
        trigger: 'item',
      },
      series: {
        type: 'pie',
        data: props.pieChartData.rows.map((row) => ({
          name: row.name,
          value: row.data,
        })),
      },
    };
  })
</script>
