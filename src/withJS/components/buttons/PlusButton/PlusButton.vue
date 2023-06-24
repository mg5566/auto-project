<template>
  <el-button :type="buttonType" :icon="Plus" circle />
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';

interface Props {
  buttonType?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

withDefaults(defineProps<Props>(), {
  buttonType: undefined,
});
</script>
