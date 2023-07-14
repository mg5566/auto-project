<template>
  <div ref="outerContainer" class="table-continer">
    <el-table
      :data="rowsData"
      :border="true"
      width="100%"
      :height="maxHeight"
    >
      <el-table-column
        v-for="column in columnsData"
        :key="column.label"
        :label="column.label"
        :prop="column.prop"
        :align="column.align"
      />
    </el-table>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { useElementBounding } from '@vueuse/core'

  const props = defineProps({
    tableData: {
      type: Object,
      required: true,
    },
  });

  const rowsData = computed(() => {
    return props.tableData.rows;
  })
  const columnsData = computed(() => {
    return props.tableData.columns;
  })

  const outerContainer = ref();
  const { height: outerHeight } = useElementBounding(outerContainer);
  const maxHeight = computed(() => {
    return outerHeight.value - 10;
  });
</script>

<style scoped lang="scss">
  .table-continer {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>
