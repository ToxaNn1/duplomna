<template>
  <div class="flex !overflow-hidden h-screen">
    <TheSidebar class="shrink-0" />
    <main class="h-screen w-full x-sm:!w-[calc(100vw_-_63px)]">
      <TheHeader />
      <div
        class="overflow-auto bg-mako router-wrapper mx-auto my-0 w-full p-[10px]"
      >
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/global/TheHeader.vue";
import { onBeforeMount } from "vue";
import { useLangStore } from "@/store/useLangStore";
import { LocaleType } from "@/types/global";
import { LOCALE_TYPE } from "@/constants/global";
import TheSidebar from "@/components/global/TheSidebar.vue";

const langStore = useLangStore();

onBeforeMount(() => {
  langStore.setLocale(
    (localStorage.getItem("locale") as LocaleType) || LOCALE_TYPE.EN
  );
});
</script>

<style scoped lang="scss">
.router-wrapper {
  height: calc(100vh - 4rem);
}
</style>
