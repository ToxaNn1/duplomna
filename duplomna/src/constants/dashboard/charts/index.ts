import { TimeFrame, TypeChart } from "@/types/dashboard/chart";

export const TYPE_CHART = Object.freeze<Record<string, TypeChart>>({
  LINE: "line",
  CANDLESTICK: "candlestick",
});

export const TIME_FRAME = Object.freeze<Record<string, TimeFrame>>({
  ONE_SECOND: "1s",
  FIFTEEN_MINUTES: "15m",
  ONE_HOUR: "1h",
  FOUR_HOUR: "4h",
});
