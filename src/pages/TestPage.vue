<template>
  <div class="test">
    <v-chart
    class="echart"
      :option="option"
      :autoresize="true"
    />
  </div>
</template>

<script setup lang="ts">
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import { EChartsOption } from 'echarts';
  import VChart from 'vue-echarts';
  import { ref } from 'vue';

  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ])

  const option = ref<EChartsOption>({
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
  })
</script>

<style scoped lang="scss">
  .test {
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
  }

  .echart {
    height: 100vh;
  }
</style>
