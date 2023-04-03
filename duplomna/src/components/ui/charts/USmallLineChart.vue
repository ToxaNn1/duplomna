<template>
  <v-chart autoresize :option="option" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { StringOrNumber } from "@/types/global";

interface ULineChartProps {
  xAxisData?: StringOrNumber[];
  xAxisType?: string;
  yAxisShow?: boolean;
  splitLine?: boolean;
  colorSplitLine?: string;
  changePrice?: string | null;
  data: StringOrNumber[];
}

const props = withDefaults(defineProps<ULineChartProps>(), {
  xAxisType: "category",
  colorSplitLine: "red",
  xAxisData: () => [],
  data: () => [],
  changePrice: "0",
});

const option = computed(() => {
  return {
    xAxis: {
      show: false,
      type: props.xAxisType,
      data: props.xAxisData,
    },
    grid: {
      top: 10,
      bottom: 5,
      right: 0,
      left: 0,
    },
    color: Number(props.changePrice) > 0 ? "#0CAF60" : "#FF3E47",
    yAxis: {
      show: false,
      type: "value",
      min: (value: { min: number; max: number }) => {
        return value.min;
      },
      splitLine: {
        show: props.splitLine,
        lineStyle: {
          color: props.colorSplitLine,
        },
      },
    },
    series: [
      {
        data: props.data,
        type: "line",
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2.5,
        },
        areaStyle: {},
      },
    ],
  };
});
</script>
