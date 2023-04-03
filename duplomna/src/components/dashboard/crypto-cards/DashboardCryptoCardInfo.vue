<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <img width="35" :src="iconUrl" alt="" />
      <div class="flex flex-col justify-start">
        <p class="whitespace-nowrap">{{ name }}</p>
        <p class="whitespace-nowrap">{{ symbol }}</p>
      </div>
    </div>
    <p class="whitespace-nowrap">{{ formatForDigitals(price) }}</p>
    <p class="whitespace-nowrap">PNL daily:{{ change }}</p>
  </div>
</template>

<script setup lang="ts">
import { formatForDigitals } from "@/helpers/formatForDigitals";
import { StringOrNumber } from "@/types/global";

interface DashboardCryptoCardInfoProps {
  name?: string;
  symbol?: string;
  price?: StringOrNumber;
  change?: StringOrNumber;
  iconUrl?: string;
}

defineProps<DashboardCryptoCardInfoProps>();
</script>

<style scoped></style>
