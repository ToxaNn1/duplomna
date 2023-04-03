<template>
  <v-chart ref="chartRef" autoresize :option="option" />
</template>

<script lang="ts" setup>
import { StringOrNumber } from "@/types/global";
import { computed, ref } from "vue";
import { TypeChart } from "@/types/dashboard/chart";
import { TYPE_CHART } from "@/constants/dashboard/charts";

interface ULineChartProps {
  xAxisData: StringOrNumber[];
  yAxisShow?: boolean;
  splitLine?: boolean;
  colorSplitLine?: string;
  data: StringOrNumber[];
  volume: StringOrNumber[];
  typeChart: TypeChart;
}

const props = withDefaults(defineProps<ULineChartProps>(), {
  colorSplitLine: "red",
  data: () => [],
  volume: () => [],
});

const chartRef = ref();

const option = computed(() => {
  return {
    color: ["#6b8cfa"],
    xAxis: [
      {
        type: "category",
        data: props.xAxisData,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: "dataMin",
        max: "dataMax",
        axisPointer: {
          z: 100,
        },
      },
      {
        type: "category",
        gridIndex: 1,
        data: props.xAxisData,
        boundaryGap: false,
        axisLine: { onZero: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        min: "dataMin",
        max: "dataMax",
      },
    ],
    yAxis: [
      {
        type: "value",
        min: (value: { min: number; max: number }) => {
          return value.min;
        },
        scale: true,
        splitLine: { show: true, lineStyle: { color: "#314483" } },
        splitArea: {
          show: false,
        },
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      borderWidth: 1,
      borderColor: "#2459f5",
      backgroundColor: "rgba(34, 64, 166, 0.7)",
      padding: 10,
      textStyle: {
        color: "white",
      },
    },
    grid: [
      {
        left: "8%",
        right: "4%",
        top: "4%",
        height: "75%",
      },
      {
        bottom: "0%",
        left: "8%",
        right: "4%",
        height: "15%",
      },
    ],
    series: [
      {
        data: props.data,
        type: props.typeChart,
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2.5,
          color: "#2459f5",
        },
        itemStyle: props.typeChart === TYPE_CHART.CANDLESTICK && {
          color: "green",
          color0: "red",
          borderColor: null,
          borderColor0: null,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#2459f5", // Start color
              },
              {
                offset: 1,
                color: "#0224a8", // End color
              },
            ],
          },
        },
      },
      {
        name: "Volume",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: props.volume,
        lineStyle: {
          color: "#2459f5",
        },
      },
    ],
  };
});
</script>
