import { StringOrNumber } from "@/types/global";

export interface ChartWebSocketData {
  data: StringOrNumber[];
  xAxisData: StringOrNumber[];
  typeChart: TypeChart;
  volume: StringOrNumber[];
}

export type TypeChart = "line" | "candlestick" | string;

export type TimeFrame = "1s" | "15m" | "1h" | "4h";
