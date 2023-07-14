<template>
  <v-chart
    class="echart"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup>
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import {
    TooltipComponent,
  } from 'echarts/components';
  import VChart from 'vue-echarts';

  defineProps({
    option: {
      type: Object,
      required: true,
    }
  });

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
