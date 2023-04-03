import { useI18n } from "vue-i18n";

export const useScopedI18n = (scope: string) => {
  const { t } = useI18n();

  const getScopedKey = (key: string) => (scope ? `${scope}.${key}` : key);

  const ts = (key: string) => t(getScopedKey(key))?.toString();

  return { ts };
};
