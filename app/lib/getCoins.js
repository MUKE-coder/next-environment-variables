const API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const HOST = process.env.NEXT_PUBLIC_HOST;
const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST,
  },
};

export default async function getCoins() {
  const response = await fetch(url, options);
  const coins = await response.json();
  return coins;
}
