<template>
  <el-icon v-bind="$attrs" :size="size" :color="color">
    <a-icon :icon="icon" />
  </el-icon>
</template>

<script setup lang="ts">
import { StringOrNumber } from "@/types/global";

interface UIconProps {
  icon: string;
  size?: StringOrNumber;
  color?: string;
}
withDefaults(defineProps<UIconProps>(), {
  size: 15,
  color: "#000",
});
</script>
