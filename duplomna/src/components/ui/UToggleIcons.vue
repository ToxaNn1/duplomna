<template>
  <div>
    <el-icon
      v-if="!value"
      :color="'gold'"
      :size="20"
      class="!absolute !cursor-pointer !top-2 !left-2"
      @click="$emit('activeIconEvent')"
    >
      <component :is="activeIcon" />
    </el-icon>
    <el-icon
      v-else
      :color="'gold'"
      :size="20"
      class="!absolute !cursor-pointer !top-2 !left-2"
      @click="$emit('inactiveIconEvent')"
    >
      <component :is="inactiveIcon"
    /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { Component } from "vue";

interface UToggleIconsProps {
  activeIcon: Component;
  inactiveIcon: Component;
  value?: boolean;
}
defineProps<UToggleIconsProps>();
defineEmits<{ (e: "activeIconEvent"): void; (e: "inactiveIconEvent"): void }>();
</script>
