<template>
  <dashboard-table-autocomplete @search-crypto="searchCrypto" />
  <div class="dashboard-table">
    <el-table class="w-full" lazy :data="data">
      <el-table-column fixed prop="name" label="Name" sortable>
        <template #default="{ row }">
          <div
            class="flex justify-start gap-5 x-sm:!gap-4 x-sm:!w-full items-center"
          >
            <span>{{ row?.rank }}</span>
            <img class="w-[20px] h-[20px]" :src="row?.iconUrl" alt="" />
            <div
              class="flex items-center !gap-5 x-sm:!gap-1 justify-between x-sm:flex-col"
            >
              <p>{{ row?.name }}</p>
              <p>{{ row?.symbol }}</p>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="Price" sortable>
        <template #default="{ row }">
          <p>{{ formatForDigitals(row?.price) }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="marketCap" sortable>
        <template #header>
          <p v-once>Market Cap</p>
          <el-tooltip v-once effect="light" placement="top">
            <template #content>
              The total market value of a cryptocurrency's circulating
              supply.<br />
              It is analogous to the free-float capitalization in the stock
              <br />
              market. Market Cap = Current Price x Circulating Supply.
            </template>
            <u-icon
              v-once
              :size="20"
              :color="iconColor"
              :icon="'fa-solid fa-circle-info'"
            />
          </el-tooltip>
        </template>
        <template #default="{ row }">
          <p>{{ formatForDigitals(row?.marketCap) }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="24hVolume" sortable>
        <template #header>
          <p v-once>24H Volume</p>
          <el-tooltip v-once effect="light" placement="top">
            <template #content>
              A measure of how much of a cryptocurrency <br />
              was traded in the last 24 hours.
            </template>
            <u-icon
              v-once
              :color="iconColor"
              :size="20"
              :icon="'fa-solid fa-circle-info'"
            />
          </el-tooltip>
        </template>
        <template #default="{ row }">
          <p>{{ formatForDigitals(row["24hVolume"]) }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="change" label="Change Price" sortable>
        <template #default="{ row }">
          <el-tooltip effect="light" placement="top">
            <template #content>
              <p>{{ row?.change }}%</p>
            </template>
            <div class="flex justify-start gap-5 items-center">
              <u-table-line-chart
                class="w-[203px] h-[64px]"
                :data="row?.sparkline"
                :change-price="row?.change"
              />
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="mt-2">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      background
      layout="prev, pager, next, jumper"
      :total="1000"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref } from "vue";
import { formatForDigitals } from "@/helpers/formatForDigitals";
import UTableLineChart from "@/components/ui/charts/USmallLineChart.vue";
import UIcon from "@/components/ui/icons/UIcon.vue";
import DashboardTableAutocomplete from "@/components/dashboard/table/DashboardTableAutocomplete.vue";
import { useQueryCryptoCoinData } from "@/composable/useQueryCryptoCoinData";

const rankWidth = ref(100);
const nameWidth = ref(200);
const currentPage = ref(1);
const pageSize = ref(10);
const { queryGetListOfCoins } = useQueryCryptoCoinData();
const { data } = queryGetListOfCoins(pageSize, currentPage);
const iconColor = computed(() => "var(--silver-sand)");
const xSm = 475;

onUnmounted(() => {
  window.removeEventListener("resize", changeTableWidth);
});

const changeTableWidth = () => {
  if (window.innerWidth < xSm) {
    rankWidth.value = 0;
    nameWidth.value = 135;
  } else {
    rankWidth.value = 100;
    nameWidth.value = 200;
  }
};

window.addEventListener("resize", changeTableWidth);

const searchCrypto = (cryptoData: any) => {
  console.log(data, "data");
};
</script>
<style lang="scss">
.dashboard-table {
  .el-table {
    &__header {
      background: var(--mako);
    }
    td.el-table__cell {
      border-bottom: 1px solid var(--cinder) !important;
    }
    & .cell {
      @apply flex items-center x-sm:flex-col gap-2 #{!important};
    }
    // change colors for table
    &--enable-row-transition .el-table__body td.el-table__cell {
      background: var(--mako);
      color: var(--silver-sand);
    }
    // chnage hover bg
    &__body tr.hover-row > td.el-table__cell {
      background: var(--cinder) !important;
    }
  }
  .el-table th.el-table__cell.is-sortable {
    background: var(--mako);
  }
}
</style>
