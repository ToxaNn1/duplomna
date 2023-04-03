<template>
  <u-wrapper-card
    class="flex h-full flex-col relative w-full items-center gap-4"
  >
    <p>{{ title }}</p>
    <el-tooltip v-if="Object.keys(card).length" effect="light" placement="top">
      <template #content>
        <p v-if="!isInWatchList">Add to your watchlist</p>
        <p v-else>Remove from your watchlist</p>
      </template>
      <u-toggle-icons
        :active-icon="Star"
        :inactive-icon="StarFilled"
        :value="isInWatchList"
        @active-icon-event="addItemsToWatchList"
        @inactive-icon-event="removeItemsFromWatchList"
      />
    </el-tooltip>
    <div v-if="!Object.keys(card).length">
      <p class="text-center mt-2">
        You don't have any crypto in your watchlist
      </p>
    </div>
    <div v-else class="flex items-center gap-3 justify-between pb-[20px]">
      <dashboard-crypto-card-info
        :name="card?.name"
        :symbol="card?.symbol"
        :price="card?.price"
        :change="card?.change"
        :icon-url="card?.iconUrl"
      />
      <u-small-line-chart
        class="w-[120px] h-[120px]"
        :data="card?.sparkline"
        :change-price="card?.change"
      />
    </div>
  </u-wrapper-card>
</template>

<script setup lang="ts">
import DashboardCryptoCardInfo from "@/components/dashboard/crypto-cards/DashboardCryptoCardInfo.vue";
import USmallLineChart from "@/components/ui/charts/USmallLineChart.vue";
import UWrapperCard from "@/components/ui/UWrapperCard.vue";
import { useToggle } from "@/composable/useToggle";
import { useCryptoWatchListStore } from "@/store/useCryptoWatchListStore";
import { CoinrankingResponse } from "@/types/api/coinRanking";
import { computed } from "vue";
import UToggleIcons from "@/components/ui/UToggleIcons.vue";
import { Star, StarFilled } from "@element-plus/icons-vue";

interface DashboardSwiperCryptoCardProps {
  title: string;
  card: CoinrankingResponse | string;
}

const props = defineProps<DashboardSwiperCryptoCardProps>();

const [watchlistClick, toggleWatchlist] = useToggle(false);

const { checkIfItemIsInWatchList } = useCryptoWatchListStore();

const { addNewItemToWatchList, removeItemFromWatchList } =
  useCryptoWatchListStore();

const isInWatchList = computed(() => {
  return checkIfItemIsInWatchList(props?.card);
});

const addItemsToWatchList = () => {
  toggleWatchlist();
  addNewItemToWatchList(props.card);
};

const removeItemsFromWatchList = () => {
  toggleWatchlist();
  removeItemFromWatchList(props.card);
};
</script>
