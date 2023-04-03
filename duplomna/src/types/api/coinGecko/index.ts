export interface CoinGeckoCoin {
  item: {
    coin_id: number;
    id: string;
    large: string;
    market_cap_rank: number;
    name: string;
    price_btc: number;
    score: number;
    slug: string;
    small: string;
    symbol: string;
    thumb: string;
  };
}

type CoinGeckoExchange = { exchanges: [] };

export interface CoinGeckoResponse {
  coins: CoinGeckoCoin[];
  exchange: CoinGeckoExchange;
}
