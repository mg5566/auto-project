import { LayoutItem } from "grid-layout-plus";
import { throttle } from "lodash";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { WidgetData } from "../withTS/components/Widget/WidgetList.type";

type LayoutStore = LayoutItem & WidgetData;

export const useLayoutStore = defineStore('layout', () => {
  const layout = ref<LayoutStore[]>([
  // const layout = ref<(LayoutItem & { panelId: string})[]>([
    // { x: 0, y: 0, w: 3, h: 4, i: '0', panelId: '0' },
    // { x: 3, y: 0, w: 3, h: 4, i: '1', panelId: '1' },
    // { x: 6, y: 0, w: 3, h: 5, i: '2', panelId: '2' },
    // { x: 9, y: 0, w: 3, h: 5, i: '3', panelId: '3' },
    // { x: 9, y: 0, w: 3, h: 6, i: '4', panelId: '4' },
  ])

  watch(layout, () => {
    console.log(layout.value)
  })

  // TODO: layout 을 update 하는 함수를 만들어야합니다.
  // delete, add
  // const deleteLayout = (id: string) => {}
  // const addLayout = (layoutItem: LayoutItem) => {}

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
