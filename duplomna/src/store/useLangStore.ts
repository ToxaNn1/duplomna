import { defineStore } from "pinia";
import { LocaleType } from "@/types/global";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

export const useLangStore = defineStore("useLangStore", () => {
  const { locale } = useI18n();
  const router = useRouter();

  const setLocale = async (newLocale: LocaleType) => {
    // add locale prefix to URL
    try {
      await router.replace({ params: { locale: newLocale } });
    } catch (e) {
      await router.push("/");
    }
    locale.value = newLocale;
    localStorage.setItem("locale", newLocale);
  };

  return { setLocale };
});
