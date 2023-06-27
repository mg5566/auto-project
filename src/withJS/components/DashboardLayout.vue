<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { throttle } from 'lodash';

import { GridLayout } from 'grid-layout-plus'
import PopoverButton from './PopoverButton.vue';

const layout = ref([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 4, i: '1' },
  { x: 4, y: 0, w: 2, h: 5, i: '2' },
  { x: 6, y: 0, w: 2, h: 3, i: '3' },
  { x: 8, y: 0, w: 2, h: 3, i: '4' },
])

const wrapper = ref()
const gridLayout = ref()

onMounted(() => {
  document.addEventListener('dragover', syncMousePosition)
})

onBeforeUnmount(() => {
  document.removeEventListener('dragover', syncMousePosition)
})

const mouseAt = { x: -1, y: -1 }

function syncMousePosition(event) {
  mouseAt.x = event.clientX
  mouseAt.y = event.clientY
}

const dropId = 'drop'
const dragItem = { x: -1, y: -1, w: 2, h: 2, i: '' }

const drag = throttle(() => {
  const parentRect = wrapper.value.getBoundingClientRect()

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
})

const dragEnd = () => {
  const parentRect = wrapper.value.getBoundingClientRect()

  if (!parentRect || !gridLayout.value) return

  const mouseInGrid =
    mouseAt.x > parentRect.left &&
    mouseAt.x < parentRect.right &&
    mouseAt.y > parentRect.top &&
    mouseAt.y < parentRect.bottom

  if (mouseInGrid) {
    // alert(`Dropped element props:\n${JSON.stringify(dragItem, ['x', 'y', 'w', 'h', 'i'], 2)}`)
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
</script>

<template>
  <div class="dashboard-layout">
    <!-- TODO: add new component layout Info -->
    <div class="dashboard-layout_info">
      Displayed as [x, y, w, h]:
      <div class="columns">
        <div v-for="item in layout" :key="item.i">
          <b>{{ item.i }}</b>: [{{ item.x }}, {{ item.y }}, {{ item.w }}, {{ item.h }}]
        </div>
      </div>
    </div>
    <div ref="wrapper">
      <GridLayout ref="gridLayout" v-model:layout="layout" :row-height="30">
        <template #item="{ item }">
          <span>{{ item.i }}</span>
        </template>
      </GridLayout>
    </div>
  </div>
  <PopoverButton
    @drag-for-add-widget="drag"
    @drag-end="dragEnd"
  />
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dashboard-layout_info {
  padding: 10px;
  background-color: #ddd;
  border: 1px solid black;

  .columns {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
}

.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}
</style>
