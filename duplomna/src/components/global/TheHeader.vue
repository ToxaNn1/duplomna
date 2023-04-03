<template>
  <header
    class="bg-mako text-silver-sand flex justify-between items-center w-full px-[10px] py-[10px] border-solid border-sky-100 border-"
  >
    <Suspense>
      <header-current-time />
      <template #fallback>
        <div>
          <p>{{ dayjs().format("D MMMM YYYY") }}</p>
        </div>
      </template>
    </Suspense>
    <nav>
      <div class="hidden md:flex items-center">
        <header-panel />
      </div>
      <div class="flex md:hidden">
        <el-button @click="openHamburgerMenu">
          <u-icon icon="fa-solid fa-bars" />
        </el-button>
        <el-drawer v-model="isOpenHamburgerMenu" direction="rtl" size="50%">
          <header-panel />
        </el-drawer>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import UIcon from "@/components/ui/icons/UIcon.vue";
import { ref } from "vue";
import dayjs from "dayjs";
import HeaderPanel from "@/components/header/HeaderPanel.vue";
import HeaderCurrentTime from "@/components/header/HeaderCurrentTime.vue";

const isOpenHamburgerMenu = ref(false);
const openHamburgerMenu = () => {
  isOpenHamburgerMenu.value = !isOpenHamburgerMenu.value;
};
</script>
