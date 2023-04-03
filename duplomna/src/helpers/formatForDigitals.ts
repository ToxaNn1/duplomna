import { StringOrNumber } from "@/types/global";

export const formatForDigitals = (
  value: StringOrNumber | bigint,
  style = "currency",
  currency = "USD",
  locales = "de-DE"
): number | bigint | string => {
  return new Intl.NumberFormat(locales, {
    style,
    currency,
  }).format(Number(value));
};
