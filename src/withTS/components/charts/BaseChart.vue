<template>
  <v-chart
    class="echart"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup lang="ts">
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
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
    PieChart,
    TooltipComponent,
  ])
</script>

<style scoped lang="scss">
  .echart {
    width: 100%;
    height: 100%;
  }
</style>
