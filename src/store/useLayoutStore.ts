import { LayoutItem } from "grid-layout-plus";
import { throttle } from "lodash";
import { defineStore } from "pinia";
import { ref } from "vue";
import { WidgetData } from "../withTS/components/Widget/WidgetList.type";

export type LayoutStore = LayoutItem & WidgetData;

export const useLayoutStore = defineStore('layout', () => {
  const layout = ref<LayoutStore[]>([])

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
