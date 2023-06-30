import { GridLayout, Layout } from "grid-layout-plus";
import { Ref, reactive } from "vue";
import { throttle } from 'lodash';

export const useGridLayout = (
    layout: Ref<Layout>,
    wrapper: Ref<HTMLElement | undefined>,
    gridLayout: Ref<InstanceType<typeof GridLayout> | undefined>
  ) => {
  const mouseAt = reactive({ x: -1, y: -1 });

  function handleDragOver(event: DragEvent) {
    mouseAt.x = event.clientX
    mouseAt.y = event.clientY
  }

  const dropId = 'drop'
  const dragItem = { x: -1, y: -1, w: 2, h: 2, i: '' }

  const handleDrag = throttle(() => {
    const parentRect = wrapper.value?.getBoundingClientRect()

    if (!parentRect || !gridLayout.value) return

    const mouseInGrid =
      mouseAt.x > parentRect.left &&
      mouseAt.x < parentRect.right &&
      mouseAt.y > parentRect.top &&
      mouseAt.y < parentRect.bottom

    if (mouseInGrid && !layout.value.find(item => item.i === dropId)) {
      layout.value.push({
        x: (layout.value.length * 2) % 12,
        y: layout.value.length + 12, // puts it at the bottom
        w: 2,
        h: 2,
        i: dropId
      })
    }

    const index = layout.value.findIndex(item => item.i === dropId)

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
        dragItem.x = layout.value[index].x
        dragItem.y = layout.value[index].y
      } else {
        gridLayout.value.dragEvent('dragend', dropId, newPos.x, newPos.y, dragItem.h, dragItem.w)
        layout.value = layout.value.filter(item => item.i !== dropId)
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
      layout.value = layout.value.filter(item => item.i !== dropId)
    } else {
      return
    }

    layout.value.push({
      x: dragItem.x,
      y: dragItem.y,
      w: dragItem.w,
      h: dragItem.h,
      i: dragItem.i
    })
    gridLayout.value.dragEvent('dragend', dragItem.i, dragItem.x, dragItem.y, dragItem.h, dragItem.w)

    const item = gridLayout.value.getItem(dropId)

    if (!item) return

    try {
      item.wrapper.style.display = ''
    } catch (e) {}
  }

  return {
    handleDragOver,
    handleDrag,
    handleDragEnd
  }
}
