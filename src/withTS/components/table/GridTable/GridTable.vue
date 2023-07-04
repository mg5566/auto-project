<template>
  <el-table :data="rowsData" :border="true" width="100%">
    <el-table-column
      v-for="column in columnsData"
      :key="column.label"
      :label="column.label"
      :prop="column.prop"
    />
  </el-table>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
import { TableData } from './GridTable';

  interface Props {
    tableData: TableData;
  }

  const props = defineProps<Props>();

  const rowsData = computed(() => {
    return props.tableData.rows;
  })
  const columnsData = computed(() => {
    return props.tableData.columns;
  })
</script>

<style scoped lang="scss">
</style>
