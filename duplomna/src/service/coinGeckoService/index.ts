import Api from "@/service/API";
import { axiosCoinGeckoInstance } from "@/api/axios-base";
import { CoinGeckoResponse } from "@/types/api/coinGecko";

export class CoinGeckoService extends Api {
  async getTopTradesCoins() {
    return await this.get<CoinGeckoResponse>(
      axiosCoinGeckoInstance,
      "/search/trending"
    );
  }
}

export default new CoinGeckoService();
