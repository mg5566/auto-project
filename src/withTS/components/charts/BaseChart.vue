<template>
  <v-chart
    class="echart"
    :init-options="initOption"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup lang="ts">
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { LineChart, PieChart } from 'echarts/charts';
  import {
    GridComponent,
    TooltipComponent,
  } from 'echarts/components';
  import VChart from 'vue-echarts';
  import { EChartsOption } from 'echarts';

  interface Props {
    option: EChartsOption;
  }
  defineProps<Props>();

  use([
    CanvasRenderer,
    GridComponent,
    PieChart,
    LineChart,
    TooltipComponent,
  ])

  const initOption = {
    width: 'auto',
    height: 'auto'
  }
</script>

<style scoped lang="scss">
  .echart {
    width: 100%;
    height: 100%;
  }
</style>
