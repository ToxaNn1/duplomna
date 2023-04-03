import Api from "@/service/API";
import { axiosCoinRanketInstance } from "@/api/axios-base";
import { CoinrankingResponse } from "@/types/api/coinRanking";

export class CoinRankingService extends Api {
  async getListOfCoins(limit = 10, offset = 0) {
    return await this.get(axiosCoinRanketInstance, "/coins", {
      params: { limit, offset },
    });
  }

  async getGainersLosers(typeCoin: string, limit = 400) {
    const {
      data: {
        //@ts-ignore
        data: { coins },
      },
    } = await this.getListOfCoins(limit);
    const sortedArray: CoinrankingResponse[] = coins.sort(
      (a: CoinrankingResponse, b: CoinrankingResponse) =>
        Number(a.change) - Number(b.change)
    );
    return typeCoin === "losers"
      ? sortedArray.slice(0, 10)
      : sortedArray.slice(-10);
  }
  // async getGainersLosers(limit = 400) {
  //   const {
  //     data: {
  //       //@ts-ignore
  //       data: { coins },
  //     },
  //   } = await this.getListOfCoins(limit);
  //   const sortedArray: CoinrankingResponse[] = coins.sort(
  //     (a: CoinrankingResponse, b: CoinrankingResponse) =>
  //       Number(a.change) - Number(b.change)
  //   );
  //   return {
  //     losers: sortedArray.slice(0, 10),
  //     gainers: sortedArray.slice(-10),
  //   };
  // }

  async searchCoinByName(search: string) {
    if (!search) return;
    const {
      data: {
        //@ts-ignore
        data: { coins },
      },
    } = await this.get(axiosCoinRanketInstance, "/coins", {
      params: { search },
    });
    return coins;
  }
}

export default new CoinRankingService();
