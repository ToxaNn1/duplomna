import { createI18n } from "vue-i18n";
import { LOCALE_TYPE } from "@/constants/global";
import en from "@/locales/en.json";
import ua from "@/locales/ua.json";

export const i18n = createI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || LOCALE_TYPE.EN,
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || LOCALE_TYPE.EN,
  messages: {
    en,
    ua,
  },
  legacy: false,
});
