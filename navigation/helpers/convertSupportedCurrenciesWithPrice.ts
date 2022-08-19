import { ConvertedSupportedCurrenciesType, PriceChangeType } from "../types";

export const convertSupportedCurrenciesWithPrice = (
  supportedCurrencies: ConvertedSupportedCurrenciesType[],
  priceChanges: PriceChangeType[]
): ConvertedSupportedCurrenciesType[] => {
  const convertedSupportedCurrenciesWithPrice = supportedCurrencies.reduce(
    (newCurrencies: ConvertedSupportedCurrenciesType[], currency) => {
      const selectedPriceChange = priceChanges.find((priceChange) =>
        priceChange.pair.includes(currency.currencySymbol.toLowerCase())
      );

      if (selectedPriceChange) {
        newCurrencies.push({
          ...currency,
          latestPrice: formatPrice(selectedPriceChange.latestPrice),
          day: `${selectedPriceChange.day || 0.0}%`,
        });
      }
      return newCurrencies;
    },
    []
  );

  return convertedSupportedCurrenciesWithPrice;
};

const formatPrice = (value: string) => {
  const tmpVal = parseInt(value)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp ${tmpVal}`;
};
