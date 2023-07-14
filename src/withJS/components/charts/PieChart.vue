<template>
  <BaseChart :option="pieOption" />
</template>

<script setup>
  import { computed } from 'vue';
  import BaseChart from './BaseChart.vue';

  const props = defineProps({
    pieChartData: {
      type: Object,
      required: true,
    },
  });

  const pieOption = computed(() => {
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
