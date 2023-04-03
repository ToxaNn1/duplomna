import axios from "axios";
import { StringOrNumber } from "@/types/global";
import dayjs from "dayjs";
import { BinanceWebsocket } from "@/types/api/binance";
import { ReactiveVariable } from "vue/macros";
import { ChartWebSocketData } from "@/types/dashboard/chart";
import { Ref } from "vue";
import { TYPE_CHART } from "@/constants/dashboard/charts";

export const useRealTimeChart = (
  chartData: ReactiveVariable<ChartWebSocketData>,
  lineTypeChart: Ref<string>
) => {
  const fetchStarterGraphic = async (times = 120, interval = "1s") => {
    const correctedSymbol = "BTC" + "USDT";
    const { data } = await axios.get("https://api.binance.com/api/v1/klines", {
      params: {
        limit: times,
        interval: interval,
        symbol: correctedSymbol,
      },
    });
    if (lineTypeChart.value === TYPE_CHART.LINE) {
      data.forEach(([xAxis, yAxis]: StringOrNumber[]) => {
        chartData.data.push(yAxis);
        chartData.xAxisData.push(dayjs(xAxis).format("HH:mm:ss"));
      });
    } else {
      data.forEach(([openTime, open, high, low, close]: StringOrNumber[]) => {
        // @ts-ignore
        chartData.data.push([open, close, low, high]);
        chartData.xAxisData.push(dayjs(openTime).format("HH:mm:ss"));
      });
    }
    data.forEach(([, , , , , volume]: StringOrNumber[]) => {
      chartData.volume.push(volume);
    });
  };

  const clearDataForNewGraphic = () => {
    chartData.data = [];
    chartData.xAxisData = [];
    chartData.volume = [];
  };

  const getDataForChart = ({ k }: BinanceWebsocket) => {
    if (lineTypeChart.value === TYPE_CHART.LINE) {
      chartData.data.push(k.o);
    }
    if (lineTypeChart.value === TYPE_CHART.CANDLESTICK) {
      // @ts-ignore
      chartData.data.push([k.o, k.c, k.l, k.h]);
    }
    chartData.xAxisData = [
      ...chartData.xAxisData,
      dayjs(k.t).format("HH:mm:ss"),
    ];
    chartData.volume.push(k.v);
  };

  return { fetchStarterGraphic, clearDataForNewGraphic, getDataForChart };
};
