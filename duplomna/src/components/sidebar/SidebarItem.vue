<template>
  <div class="global-sidebar__item">
    <el-menu-item
      id="sidebar-item"
      :index="index"
      :route="link"
      class="!rounded-[20px] !w-full gap-[1rem]"
      :class="{
        '!absolute !bottom-0 !right-0': isLastItem,
        '!w-[80%]': !isCollapsed,
      }"
      @click="clickSidebar"
    >
      <u-icon :size="20" :icon="icon" />
      <template #title>
        <span class="text-[22px] font-semibold">{{ title }}</span>
      </template>
    </el-menu-item>
    <el-divider v-if="+index === +dividerIndex" />
  </div>
</template>

<script setup lang="ts">
import UIcon from "@/components/ui/icons/UIcon.vue";
import { StringOrNumber } from "@/types/global";

interface GlobalSidebarItemProps {
  index: string;
  link?: string;
  icon: string;
  title: string;
  dividerIndex: StringOrNumber;
  isLastItem: boolean;
  isCollapsed: boolean;
}
const props = withDefaults(defineProps<GlobalSidebarItemProps>(), {
  index: "1",
  isLastItem: false,
  link: "/",
});
const emit = defineEmits<{ (e: "toggleSidebar"): void }>();

const clickSidebar = () => props.isLastItem && emit("toggleSidebar");
</script>

<style lang="scss">
.global-sidebar__item {
  #sidebar-item {
    --el-menu-hover-bg-color: var(--neon-blue) !important;
  }
  &:first-child {
    @apply mt-[60px];
  }

  .el-menu-item.is-active {
    @apply text-white bg-neon-blue;
  }

  .el-divider--horizontal {
    @apply w-[80%] mx-auto;
  }
}
</style>
