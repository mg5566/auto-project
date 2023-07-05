import { Layout } from "grid-layout-plus";
import { throttle } from "lodash";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useLayoutStore = defineStore('layout', () => {
  const layout = ref<Layout>([
    { x: 0, y: 0, w: 3, h: 4, i: '0' },
    { x: 3, y: 0, w: 3, h: 4, i: '1' },
    { x: 6, y: 0, w: 3, h: 5, i: '2' },
    { x: 9, y: 0, w: 3, h: 5, i: '3' },
    { x: 9, y: 0, w: 3, h: 6, i: '4' },
  ])

  type ModifyLayout = (id: string, width: number, height: number) => void;
  const modifyLayout = throttle<ModifyLayout>((id, width, height) => {
    if (layout.value.find((item) => item.i === id)) {
      layout.value = layout.value.map((item) => {
        if (item.i === id) {
          return { ...item, w: width, h: height }
        }
        return item
      })
    }
  })

  return { layout, modifyLayout };
});
