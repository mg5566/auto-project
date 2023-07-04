<template>
  <!-- widget 은 header 영역과 body 영역으로 나뉨 -->
  <div class="widget">
    <!-- header -->
    <div class="widget__header">
      {{ title }}
    </div>
    <!-- body -->
    <div class="widget__body">
      <!-- {{ data }} -->
      <!-- TODO: HOC 적용하기 -->
      <TestPage />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import TestPage from '../../../pages/TestPage.vue'

  interface Props {
    // TODO: widget id 만 받아서 fetching 을 진행하자
    widgetId: string;
  }
  const props = defineProps<Props>();

  const title = computed(() => {
    return props.widgetId;
  });
  /*
  const data = computed(() => {
    // TODO: type 에 따른 widget 이 생길 수 있도록 변경하기
    // 나중에 type 에 따른 data 를 전달해야합니다.
    // return props.widget.data;
    return props.widgetId;
  });
  */
</script>

<style scoped lang="scss">
  .widget {
    height: 100%;
    display: flex;
    flex-direction: column;

    &__header {
      height: 30px;
      background-color: #ddd;
    }

    &__body {
      flex:1;
      overflow: hidden;
      background-color: #eee;
    }
  }
</style>
