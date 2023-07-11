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
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components';
  import { EChartsOption } from 'echarts';
  import VChart from 'vue-echarts';

  interface Props {
    option: EChartsOption;
  }
  defineProps<Props>();

  use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  ])
</script>

<style scoped lang="scss">
  .echart {
    width: 100%;
    height: 100%;
  }
</style>
