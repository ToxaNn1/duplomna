import { Ref, unref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { notification } from "@/utils/notification";
import CoinRankingService from "@/service/coinRanketService";
import CoinGeckoService from "@/service/coinGeckoService";
import { CoinGeckoCoin } from "@/types/api/coinGecko";

export const useQueryCryptoCoinData = () => {
  const queryLosersCoins = (
    typeCoin: string | Ref<string>,
    limit: number | Ref<number> = 500
  ) => {
    return useQuery({
      queryKey: ["losers", limit],
      queryFn: async () => {
        try {
          return await CoinRankingService.getGainersLosers(
            unref(typeCoin),
            unref(limit)
          );
        } catch (e) {
          notification(" Error gainers");
          console.log(e);
        }
      },
    });
  };

  const queryGainersCoins = (
    typeCoin: string | Ref<string>,
    limit: number | Ref<number> = 500
  ) => {
    return useQuery({
      queryKey: ["gainers", limit],
      queryFn: async () => {
        try {
          return await CoinRankingService.getGainersLosers(
            unref(typeCoin),
            unref(limit)
          );
        } catch (e) {
          notification(" Error gainers");
          console.log(e);
        }
      },
    });
  };

  const queryGetListOfCoins = (
    limit: number | Ref<number> = 10,
    offset: number | Ref<number> = 0
  ) => {
    return useQuery({
      queryKey: ["table coins", limit, offset],
      queryFn: async () => {
        try {
          return await CoinRankingService.getListOfCoins(
            unref(limit),
            unref(offset) - 1
          );
        } catch (e) {
          notification("Error list of coins");
          console.log(e);
        }
      },
      retry: 3,
      //@ts-ignore
      select: (data) => data.data.data.coins,
      keepPreviousData: true,
    });
  };

  //**
  //  * @description Get top trades coins from CoinGecko
  //  * @description Get data from CoinRanking by name
  //  * @description Return array of CoinrankingResponse
  //  * @returns {Promise<CoinrankingResponse[]>}
  // */

  const queryGetTopTradesCoins = () => {
    return useQuery({
      queryKey: ["top trades coins"],
      queryFn: async () => {
        try {
          const { data: data } = await CoinGeckoService.getTopTradesCoins();
          const namesTopCoins = data?.coins.map(
            (coin: CoinGeckoCoin) => coin.item.name
          );
          const res = await Promise.all(
            namesTopCoins?.map(async (name: string) => {
              const searchResult = await CoinRankingService.searchCoinByName(
                name
              );
              return searchResult[0];
            })
          );
          return res.filter((coin) => coin !== undefined);
        } catch (e) {
          notification("Error top trades coins");
          console.log(e);
        }
      },
    });
  };

  return {
    queryGetListOfCoins,
    queryGetTopTradesCoins,
    queryGainersCoins,
    queryLosersCoins,
  };
};
