<template>
  <el-menu
    class="el-menu-vertical-demo rounded-tr-3xl relative rounded-br-3xl"
    :collapse="isCollapse"
    router
    default-active="1"
    background-color="mako"
    text-color="#fff"
  >
    <sidebar-item
      v-for="(item, index) in sidebarNav"
      :key="item.id"
      :title="item.name"
      :icon="item.icon"
      :link="item.link"
      :divider-index="1"
      :index="item.id"
      :is-collapsed="isCollapse"
      :is-last-item="index === sidebarNav.length - 1"
      @toggle-sidebar="toggleSidebar"
    />
  </el-menu>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import SidebarItem from "@/components/sidebar/SidebarItem.vue";
import { Sidebar } from "@/types/sidebar";
import { SIDEBAR_NAVIGATION } from "@/constants/sidebar/sidebar.navigation";

const isCollapse = ref(false);

const sidebarNav = computed<Sidebar[]>(() => {
  return [
    {
      id: "1",
      name: SIDEBAR_NAVIGATION.DASHBOARD_NAME,
      title: SIDEBAR_NAVIGATION.DASHBOARD_NAME,
      link: "/",
      icon: SIDEBAR_NAVIGATION.DASHBOARD_ICON,
    },
    {
      id: "2",
      name: "flatPicker",
      title: "Live price",
      link: "/flat-picker",
      icon: SIDEBAR_NAVIGATION.DASHBOARD_ICON,
    },
    {
      id: "3",
      name: SIDEBAR_NAVIGATION.ACCOUNT_NAME,
      title: SIDEBAR_NAVIGATION.ACCOUNT_NAME,
      link: "/calendar",
      icon: SIDEBAR_NAVIGATION.ACCOUNT_ICON,
    },
    {
      id: "4",
      name: SIDEBAR_NAVIGATION.LOG_OUT_NAME,
      title: SIDEBAR_NAVIGATION.LOG_OUT_NAME,
      link: "/login",
      icon: SIDEBAR_NAVIGATION.LOG_OUT_ICON,
    },
    {
      id: "isLastItem",
      name: SIDEBAR_NAVIGATION.COLLAPSE_NAME,
      icon: SIDEBAR_NAVIGATION.COLLAPSE_ICON,
    },
  ];
});

const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  --el-menu-bg-color: var(--cinder) !important;
  --el-menu-text-color: var(--silver-sand) !important;
  border: 1px solid var(--mako);
}
</style>
