<template>
  <div class="test">
    <BaseChart :option="option" />
  </div>
</template>

<script setup lang="ts">
  import { EChartsOption } from 'echarts';
  import BaseChart from '../withTS/components/charts/BaseChart.vue';

  const option: EChartsOption = {
    title: {
      text: 'test pie chart',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['CAR1', 'CAR2', 'CAR3', 'CAR4', 'CAR5'],
    },
    series: {
      name: 'test pie chart',
      type: 'pie',
      data: [
        {
          name: 'CAR1',
          value: 40,
        }, {
          name: 'CAR2',
          value: 20,
        }, {
          name: 'CAR3',
          value: 20,
        }, {
          name: 'CAR4',
          value: 15,
        }, {
          name: 'CAR5',
          value: 5,
        }
      ]
    }
  }
</script>

<style scoped lang="scss">
  .test {
    width: 100%;
    height: 30rem;
    background-color: antiquewhite;
  }
</style>
