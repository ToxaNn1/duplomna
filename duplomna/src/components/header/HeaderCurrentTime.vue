<template>
  <div>
    <p>{{ currentTime }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";
import { useI18n } from "vue-i18n";
import { LOCALE_TYPE } from "@/constants/global";

const { locale } = useI18n();

//**
//   locale.value === LOCALE_TYPE.UK
//   because locale.value  === 'en' in any case
// */
await import(
  locale.value === LOCALE_TYPE.UA ? "dayjs/locale/en" : "dayjs/locale/uk"
);

const dayjsLocale = computed(() =>
  locale.value === LOCALE_TYPE.UA ? "uk" : LOCALE_TYPE.EN
);

const currentTime = computed(() =>
  dayjs().locale(dayjsLocale.value).format("dddd - D MMMM YYYY")
);
</script>
