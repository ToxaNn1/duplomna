import axios from "axios";

export const axiosCoinRanketInstance = axios.create({
  baseURL: import.meta.env.VITE_COIN_RANKET_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": import.meta.env.VITE_COIN_RANKET_API_TOKEN,
    "Access-Control-Allow-Origin": "*",
  },
});

export const axiosCoinGeckoInstance = axios.create({
  baseURL: import.meta.env.VITE_COIN_GECKO_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
