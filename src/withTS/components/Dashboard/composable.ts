import { GridLayout } from "grid-layout-plus";
import { Ref, reactive } from "vue";
import { throttle } from 'lodash';
import { useLayoutStore } from "../../../store/useLayoutStore";
import { WidgetData } from "../Widget/WidgetList.type";

export const useGridLayout = (
    wrapper: Ref<HTMLElement | undefined>,
    gridLayout: Ref<InstanceType<typeof GridLayout> | undefined>
  ) => {
  const layoutStore = useLayoutStore();
  const mouseAt = reactive({ x: -1, y: -1 });

  function handleDragOver(event: DragEvent) {
    mouseAt.x = event.clientX
    mouseAt.y = event.clientY
  }

  const dropId = 'drop'
  const dragItem = {
    x: -1,
    y: -1,
    w: 3,
    h: 4,
    i: '',
    panelId: '',
    panelName: '',
    panelType: '',
    columns: [] as unknown,
    rows: [] as unknown,
  }

  // id 말고, widgetData 통째로 넣어야합니다
  const handleDrag = throttle<(widget: WidgetData) => void>((widget) => {
  // const handleDrag = throttle<(id: string) => void>((id) => {
    const parentRect = wrapper.value?.getBoundingClientRect()

    if (!parentRect || !gridLayout.value) return

    const mouseInGrid =
      mouseAt.x > parentRect.left &&
      mouseAt.x < parentRect.right &&
      mouseAt.y > parentRect.top &&
      mouseAt.y < parentRect.bottom

    if (mouseInGrid && !layoutStore.layout.find(item => item.i === dropId)) {
      layoutStore.layout.push({
        x: (layoutStore.layout.length * 2) % 12,
        y: layoutStore.layout.length + 12, // puts it at the bottom
        w: 3,
        h: 4,
        i: dropId,
        ...widget
      })
    }

    const index = layoutStore.layout.findIndex(item => item.i === dropId)

    if (index !== -1) {
      const item = gridLayout.value.getItem(dropId)

      if (!item) return

      try {
        item.wrapper.style.display = 'none'
      } catch (e) {}

      Object.assign(item.state, {
        top: mouseAt.y - parentRect.top,
        left: mouseAt.x - parentRect.left
      })
      const newPos = item.calcXY(mouseAt.y - parentRect.top, mouseAt.x - parentRect.left)

      if (mouseInGrid) {
        gridLayout.value.dragEvent('dragstart', dropId, newPos.x, newPos.y, dragItem.h, dragItem.w)
        dragItem.i = String(index)
        dragItem.x = layoutStore.layout[index].x
        dragItem.y = layoutStore.layout[index].y
        dragItem.panelId = widget.panelId;
        dragItem.panelType = widget.panelType;
        dragItem.panelName = widget.panelName;
        dragItem.columns = widget.columns;
        dragItem.rows = widget.rows;
      } else {
        gridLayout.value.dragEvent('dragend', dropId, newPos.x, newPos.y, dragItem.h, dragItem.w)
        layoutStore.layout = layoutStore.layout.filter(item => item.i !== dropId)
      }
    }
  });

  const handleDragEnd = () => {
    const parentRect = wrapper.value?.getBoundingClientRect()

    if (!parentRect || !gridLayout.value) return

    const mouseInGrid =
      mouseAt.x > parentRect.left &&
      mouseAt.x < parentRect.right &&
      mouseAt.y > parentRect.top &&
      mouseAt.y < parentRect.bottom

    if (mouseInGrid) {
      gridLayout.value.dragEvent('dragend', dropId, dragItem.x, dragItem.y, dragItem.h, dragItem.w)
      layoutStore.layout = layoutStore.layout.filter(item => item.i !== dropId)
    } else {
      return
    }

    layoutStore.layout.push({
      x: dragItem.x,
      y: dragItem.y,
      w: dragItem.w,
      h: dragItem.h,
      i: dragItem.i,
      panelId: dragItem.panelId,
      panelName: dragItem.panelName,
      panelType: dragItem.panelType as "PIE_CHART" | "TABLE" | "GRID",
      columns: dragItem.columns as any,
      rows: dragItem.rows as any,
    })
    gridLayout.value.dragEvent('dragend', dragItem.i, dragItem.x, dragItem.y, dragItem.h, dragItem.w)

    const item = gridLayout.value.getItem(dropId)

    if (!item) return

    try {
      item.wrapper.style.display = ''
    } catch (e) {}
  }

  return {
    layoutStore,
    handleDragOver,
    handleDrag,
    handleDragEnd
  }
}
