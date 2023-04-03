<template>
  <div
    class="header-panel flex flex-col gap-4 items-center md:gap-0 md:flex-row"
  >
    <u-select
      v-model="currentLocale"
      class="mr-2 x-sm:mr-0"
      :options="options"
      @change="langStore.setLocale"
    />
    <u-button class="mr-4 x-sm:mr-0">
      <u-switch
        v-model="modeTheme"
        size="large"
        :in-active-icon="Moon"
        :active-icon="Sunny"
      />
    </u-button>

    <div class="flex items-center x-sm:flex-col x-sm:gap-3">
      <u-button v-once>
        <u-icon :color="iconColor" icon="fa-solid fa-wallet" />
      </u-button>
      <u-button v-once class="x-sm:!ml-0">
        <u-icon :color="iconColor" icon="fa-solid fa-gear" />
      </u-button>
      <u-button v-once class="x-sm:!ml-0">
        <u-icon
          :color="iconColor"
          icon="fa-solid fa-arrow-right-from-bracket"
        />
      </u-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from "vue";
import { LOCALE_NAME, LOCALE_TYPE } from "@/constants/global";
import { useI18n } from "vue-i18n";
import UButton from "@/components/ui/UButton.vue";
import UIcon from "@/components/ui/icons/UIcon.vue";
import USelect from "@/components/ui/USelect.vue";
import USwitch from "@/components/ui/USwitch.vue";
import { useScopedI18n } from "@/utils/scopedI18n";
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useLangStore } from "@/store/useLangStore";
import { useThemeStore } from "@/store/useThemeStore";

const modeTheme = ref(false);
const { locale } = useI18n();
const { ts } = useScopedI18n("global");
const langStore = useLangStore();
const { setTheme } = useThemeStore();

const iconColor = computed(() => "var(--silver-sand)");

const currentLocale = computed({
  get() {
    return locale.value === LOCALE_TYPE.EN
      ? ts(LOCALE_NAME.EN)
      : ts(LOCALE_NAME.UA);
  },
  set(value) {
    locale.value = value;
  },
});

const options = computed(() => {
  return [
    {
      value: LOCALE_TYPE.EN,
      label: ts(LOCALE_NAME.EN),
    },
    {
      value: LOCALE_TYPE.UA,
      label: ts(LOCALE_NAME.UA),
    },
  ];
});

watch(
  () => modeTheme.value,
  () => {
    setTheme(modeTheme.value);
  }
);

onBeforeMount(() => {
  setTheme(modeTheme.value);
});
</script>

<style lang="scss" scoped></style>
