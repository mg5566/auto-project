<template>
  <!-- widget 은 header 영역과 body 영역으로 나뉨 -->
  <div class="widget">
    <!-- header -->
    <div class="widget__header">
      <div>{{ wigetTitle }}</div>
      <a class="widget__header__edit" @click="handleOpenEditor">edit</a>
    </div>
    <!-- body -->
    <div class="widget__body">
      <!-- TODO: HOC 적용하기 -->
      <!-- <TestPage /> -->
      <GridTable v-loading="isLoading" :tableData="tableData" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  // import TestPage from '../../../pages/TestPage.vue'
  import { usePanel } from '../../../services/usePanel';
  import GridTable from '../table/GridTable/GridTable.vue';
  import { TableData } from '../table/GridTable/GridTable';

  interface Props {
    // TODO: widget id 만 받아서 fetching 을 진행하자
    widgetId: string;
  }
  const props = defineProps<Props>();

  interface Emits {
    (e: 'openWidgetEditor', id: string): void;
  }
  const emit = defineEmits<Emits>();

  // const title = computed(() => {
  //   return props.widgetId;
  // });
  /*
  const data = computed(() => {
    // TODO: type 에 따른 widget 이 생길 수 있도록 변경하기
    // 나중에 type 에 따른 data 를 전달해야합니다.
    // return props.widget.data;
    return props.widgetId;
  });
  */

  const handleOpenEditor = () => {
    console.log('click edit');
    emit('openWidgetEditor', props.widgetId);
  };

  /**
   * fetch Panel
   */
  const { data, isLoading } = usePanel(props.widgetId, computed(() => !!props.widgetId));

  const wigetTitle = computed(() => {
    const title = data.value?.panelName;
    return title;
  })
  const tableData = computed<TableData>(() => {
    const tempData = data.value ?? { columns: [], rows: [] } as TableData;
    return tempData;
  })

</script>

<style scoped lang="scss">
  .widget {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__header {
      height: 30px;
      background-color: #ddd;

      display: flex;
      justify-content: space-between;

      padding: 0 1rem;

      &__edit {
        cursor: pointer;
        border: 1px solid black;
      }
    }

    &__body {
      flex:1;
      overflow: hidden;
      background-color: #eee;
    }
  }
</style>
