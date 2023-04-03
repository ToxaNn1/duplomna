<template>
  <div class="u-autocomplete-global">
    <el-autocomplete
      v-model.lazy="autocompleteValue"
      class="mb-4"
      :fetch-suggestions="querySearch"
      clearable
      placeholder="Search crypto"
      @select="$emit('searchCrypto', $event)"
    >
      <template #default="{ item }">
        <div class="flex-between">
          <div class="flex items-center gap-2">
            <img
              class="w-[18px] h-[18px]"
              :src="item?.iconUrl"
              alt="crypto icon"
            />
            <p class="text-white text-[16px]">{{ item.value }}</p>
            <p class="text-[11px] text-gray-300">{{ item.symbol }}</p>
          </div>
        </div>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import CoinRankingService from "@/service/coinRanketService";
import { CoinrankingResponse } from "@/types/api/coinRanking";

const suggestItems = ref<CoinrankingResponse[]>([]);

defineEmits<{ (e: "searchCrypto", data: string): void }>();

const autocompleteValue = ref("");

watch(
  () => autocompleteValue.value,
  async () => {
    suggestItems.value = await CoinRankingService.searchCoinByName(
      autocompleteValue.value
    );

    suggestItems.value = suggestItems.value.map((item: CoinrankingResponse) => {
      return { value: item.name, ...item };
    });
  }
);
const querySearch = (queryString: string, cb: any) => {
  const results = suggestItems.value;
  cb(results);
};
</script>
<style lang="scss">
.u-autocomplete-global {
  .el-input__wrapper {
    background: var(--mako);
    box-shadow: var(--mako);
  }
  .el-input__inner {
    color: var(--silver-sand);
  }
  .el-select .el-input .el-select__caret.el-icon {
    color: var(--silver-sand);
  }
}
.el-autocomplete__popper.el-popper {
  display: flex;
  background: var(--mako) !important;
  box-shadow: var(--mako) !important;
  border: 1px solid var(--silver-sand) !important;
}
.el-popper.is-light .el-popper__arrow::before {
  border: none;
  background: transparent;
}
</style>
