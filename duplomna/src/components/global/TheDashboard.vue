<template>
  <div class="flex bg-mako flex-col gap-3">
    <Suspense>
      <div>
        <dashboard-cards />
        <dashboard-real-time-chart />
      </div>
      <template #fallback>
        <u-skeleton-card class="!w-full" />
      </template>
    </Suspense>
    <Suspense>
      <u-wrapper-card class="!w-full">
        <dashboard-table />
      </u-wrapper-card>
      <template #fallback>
        <u-skeleton-table class="!w-full" :count-of-lines="10" />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import USkeletonTable from "@/components/ui/skeleton/USkeletonTable.vue";
import DashboardCards from "@/components/dashboard/crypto-cards/DashboardCryptoCards.vue";
import USkeletonCard from "@/components/ui/skeleton/USkeletonCard.vue";

const DashboardTable = defineAsyncComponent({
  loader: () => import("@/components/dashboard/table/DashboardTable.vue"),
  errorComponent: USkeletonTable,
});

const DashboardRealTimeChart = defineAsyncComponent({
  loader: () =>
    import("@/components/dashboard/chart/DashboardChartInRealTime.vue"),
  errorComponent: USkeletonCard,
});
</script>
