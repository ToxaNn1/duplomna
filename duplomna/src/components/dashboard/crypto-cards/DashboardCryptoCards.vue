<template>
  <div
    class="flex-wrap flex items-center justify-between dashboard-cards-swiper gap-2"
  >
    <template v-for="(swiperCard, index) in swiperCardsData" :key="swiperCard">
      <swiper
        v-if="swiperCard"
        :pagination="{ clickable: true }"
        :modules="[Pagination]"
        class="!w-[280px] h-[220px]"
      >
        <swiper-slide v-for="card in swiperCard" :key="card?.name">
          <dashboard-swiper-crypto-card
            :title="swiperCardsTitle[index]"
            :card="card"
          />
        </swiper-slide>
      </swiper>
      <div v-else class="w-[280px] h-[220px]">
        <u-wrapper-card
          class="flex flex-col h-full justify-center items-center relative w-full items-center gap-4"
        >
          <u-loader />
        </u-wrapper-card>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useQueryCryptoCoinData } from "@/composable/useQueryCryptoCoinData";
import { storeToRefs } from "pinia";
import { useCryptoWatchListStore } from "@/store/useCryptoWatchListStore";
import USkeletonCard from "@/components/ui/skeleton/USkeletonCard.vue";
import ULoader from "@/components/ui/ULoader.vue";
import UWrapperCard from "@/components/ui/UWrapperCard.vue";

const { data: trending } = useQueryCryptoCoinData().queryGetTopTradesCoins();
const { data: losers } = useQueryCryptoCoinData().queryLosersCoins("losers");
const { data: gainers } = useQueryCryptoCoinData().queryGainersCoins("gainers");
const { cryptoWatchlist } = storeToRefs(useCryptoWatchListStore());

const DashboardSwiperCryptoCard = defineAsyncComponent({
  loader: () =>
    import("@/components/dashboard/crypto-cards/DashboardSwiperCryptoCard.vue"),
  errorComponent: USkeletonCard,
});

const swiperCardsData = computed(() => [
  losers?.value,
  gainers?.value,
  trending?.value,
  cryptoWatchlist.value,
]);

const swiperCardsTitle = computed(() => {
  return [
    "Top Losers Crypto",
    "Top Gainers Crypto",
    "Top Trend Crypto",
    "My Watchlist",
  ];
});
</script>

<style lang="scss">
.dashboard-cards-swiper {
  .swiper {
    margin: 0;
    &-pagination {
      bottom: 0 !important;
      &-bullet {
        background: var(--silver-sand);
      }
    }
  }
}
</style>
