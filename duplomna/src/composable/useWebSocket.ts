import { useRealTimeChart } from "@/composable/useRealTimeChart";
import { ReactiveVariable } from "vue/macros";
import { ChartWebSocketData } from "@/types/dashboard/chart";
import { Ref } from "vue";

export const useWebSocket = (
  wsInstanse: Ref<WebSocket>,
  chartData: ReactiveVariable<ChartWebSocketData>,
  lineTypeChart: Ref<string>
) => {
  const { fetchStarterGraphic, clearDataForNewGraphic, getDataForChart } =
    useRealTimeChart(chartData, lineTypeChart);

  const webSocketRelaunch = async (
    timeFrame: Ref<string>,
    cryptoPair: Ref<string>
  ) => {
    wsInstanse.value.onclose = function () {
      console.log("Connection is closed...");
    };
    wsInstanse.value.close();
    clearDataForNewGraphic();
    await fetchStarterGraphic(120, timeFrame.value);
    wsInstanse.value = new WebSocket(
      `${import.meta.env.VITE_WEBSOCKET_URL}/${cryptoPair.value}@kline_${
        timeFrame.value
      }`
    );
    wsInstanse.value.onmessage = (event: MessageEvent) => {
      getDataForChart(JSON.parse(event.data));
    };
  };

  return {
    webSocketRelaunch,
    fetchStarterGraphic,
    clearDataForNewGraphic,
    getDataForChart,
  };
};
