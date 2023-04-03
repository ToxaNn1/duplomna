import { defineStore } from "pinia";
import { ref } from "vue";
import { CoinrankingResponse } from "@/types/api/coinRanking";

export const useCryptoWatchListStore = defineStore(
  "useCryptoWatchListStore",
  () => {
    const cryptoWatchlist = ref<CoinrankingResponse[] | object[]>([{}]);

    const addNewItemToWatchList = (item: CoinrankingResponse | object[]) => {
      cryptoWatchlist.value = [item, ...cryptoWatchlist.value];
      // @ts-ignore
      cryptoWatchlist.value = cryptoWatchlist.value.filter(
        // @ts-ignore
        (item) => item?.uuid
      );
    };

    const removeItemFromWatchList = (item: CoinrankingResponse | object[]) => {
      cryptoWatchlist.value = cryptoWatchlist.value.filter(
        // @ts-ignore
        (crypto: CoinrankingResponse) => crypto.uuid !== item.uuid
      );
      if (!cryptoWatchlist.value.length) cryptoWatchlist.value = [{}];
    };

    const checkIfItemIsInWatchList = (item: CoinrankingResponse | object[]) => {
      return (cryptoWatchlist.value as CoinrankingResponse[]).some(
        // @ts-ignore
        (crypto: CoinrankingResponse) => crypto.uuid === item?.uuid
      );
    };

    return {
      cryptoWatchlist,
      addNewItemToWatchList,
      removeItemFromWatchList,
      checkIfItemIsInWatchList,
    };
  }
);
