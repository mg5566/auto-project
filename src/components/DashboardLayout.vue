<template>
  <GridLayout :layout="layout" @layout-updated="handleLayoutUpdated">
    <GridItem
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      <div class="item-container">
        {{ item.i }}
      </div>
    </GridItem>
  </GridLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {GridItem, GridLayout } from 'vue3-grid-layout-next';
import { Layout } from 'vue3-grid-layout-next/dist/helpers/utils';

const layout = ref<Layout>([
  {"x":0,"y":0,"w":2,"h":2,"i":"0"},
  {"x":2,"y":0,"w":2,"h":4,"i":"1"},
  {"x":4,"y":0,"w":2,"h":5,"i":"2"},
  {"x":6,"y":0,"w":2,"h":3,"i":"3"},
  {"x":8,"y":0,"w":2,"h":3,"i":"4"},
  {"x":10,"y":0,"w":2,"h":3,"i":"5"},
  {"x":0,"y":5,"w":2,"h":5,"i":"6"},
  {"x":2,"y":5,"w":2,"h":5,"i":"7"},
  {"x":4,"y":5,"w":2,"h":5,"i":"8"},
  {"x":6,"y":3,"w":2,"h":4,"i":"9"},
  {"x":8,"y":4,"w":2,"h":4,"i":"10"},
  {"x":10,"y":4,"w":2,"h":4,"i":"11"},
  {"x":0,"y":10,"w":2,"h":5,"i":"12"},
  {"x":2,"y":10,"w":2,"h":5,"i":"13"},
  {"x":4,"y":8,"w":2,"h":4,"i":"14"},
  {"x":6,"y":8,"w":2,"h":4,"i":"15"},
  {"x":8,"y":10,"w":2,"h":5,"i":"16"},
  {"x":10,"y":4,"w":2,"h":2,"i":"17"},
  {"x":0,"y":9,"w":2,"h":3,"i":"18"},
  {"x":2,"y":6,"w":2,"h":2,"i":"19"}
]);

const handleLayoutUpdated = (newLayout: Layout) => {
  console.log('before ', layout.value);
  console.log('after  ', newLayout);
};
</script>

<style scoped>
  .item-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    border: 1px solid #000;

    touch-action: none;
  }
</style>
