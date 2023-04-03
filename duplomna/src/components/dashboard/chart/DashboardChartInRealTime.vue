<template>
  <u-wrapper-card>
    <template #default>
      <div class="flex gap-1 items-center">
        <u-button
          v-for="frame in timeFrames"
          :key="frame"
          @click="changeTimeFrame(frame)"
          >{{ frame }}</u-button
        >
        <u-button @click="changeTypeChart(TYPE_CHART.LINE)">Line</u-button>
        <u-button @click="changeTypeChart(TYPE_CHART.CANDLESTICK)"
          >CandleStick</u-button
        >
      </div>
      <div class="w-[550px] h-[550px]">
        <u-big-line-chart v-if="webSocketData.data" v-bind="webSocketData" />
        <div v-else class="flex-center w-full h-full">
          <u-loader />
        </div>
      </div>
    </template>
  </u-wrapper-card>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import UBigLineChart from "@/components/ui/charts/UBigLineChart.vue";
import { useWebSocket } from "@/composable/useWebSocket";
import {
  ChartWebSocketData,
  TimeFrame,
  TypeChart,
} from "@/types/dashboard/chart";
import { TIME_FRAME, TYPE_CHART } from "@/constants/dashboard/charts";
import UWrapperCard from "@/components/ui/UWrapperCard.vue";
import UButton from "@/components/ui/UButton.vue";
import ULoader from "@/components/ui/ULoader.vue";

const lineTypeChart = ref(TYPE_CHART.LINE);
const timeFrame = ref(TIME_FRAME.ONE_SECOND);
const cryptoPair = ref("btcusdt");

const webSocket = ref(
  new WebSocket(
    `${import.meta.env.VITE_WEBSOCKET_URL}/${cryptoPair.value}@kline_${
      timeFrame.value
    }`
  )
);

const webSocketData = reactive<ChartWebSocketData>({
  data: [],
  xAxisData: [],
  typeChart: TYPE_CHART.LINE,
  volume: [],
});

const { webSocketRelaunch, fetchStarterGraphic, getDataForChart } =
  useWebSocket(webSocket, webSocketData, lineTypeChart);

const timeFrames = [
  TIME_FRAME.ONE_SECOND,
  TIME_FRAME.FIFTEEN_MINUTES,
  TIME_FRAME.ONE_HOUR,
  TIME_FRAME.FOUR_HOUR,
];

onMounted(async () => {
  await fetchStarterGraphic();
});

webSocket.value.onmessage = (event) => {
  getDataForChart(JSON.parse(event.data));
};

const changeTypeChart = (type = TYPE_CHART.LINE as TypeChart) => {
  if (type === lineTypeChart.value) return;
  lineTypeChart.value = type;
  webSocketData.typeChart = type;
  webSocketRelaunch(timeFrame, cryptoPair);
};

const changeTimeFrame = (time = TIME_FRAME.ONE_SECOND as TimeFrame) => {
  if (time === timeFrame.value) return;
  timeFrame.value = time;
  webSocketRelaunch(timeFrame, cryptoPair);
};
</script>
