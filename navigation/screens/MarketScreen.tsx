import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

import CurrencyItem from "./components/CurrencyItem";
import TagList from "./components/TagList";

import { convertSupportedCurrencies } from "../helpers/convertSupportedCurrencies";
import { convertSupportedCurrenciesWithPrice } from "../helpers/convertSupportedCurrenciesWithPrice";

import {
  ConvertedSupportedCurrenciesType,
  SupportedCurrenciesResponseType,
} from "../types";
import { LIST_TAGS } from "../constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonSortContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems:"center"
  },
  sortContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    marginHorizontal: 10,
    marginBottom: 20
  }
});

const MarketScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [supportedCurrencies, setSupportedCurrencies] = useState<
    ConvertedSupportedCurrenciesType[]
  >([]);

  const getSupportedCurrencies = async () => {
    const response = await fetch(
      "https://api.pintu.co.id/v2/wallet/supportedCurrencies"
    );
    const data: SupportedCurrenciesResponseType[] = (await response.json())
      .payload;
    const convertedData = convertSupportedCurrencies(data);
    getPriceChanges(convertedData);
  };

  const getPriceChanges = async (
    tmpSupportedCurrencies?: ConvertedSupportedCurrenciesType[]
  ) => {
    const response = await fetch(
      "https://api.pintu.co.id/v2/trade/price-changes"
    );
    const data = (await response.json()).payload;
    const convertedData = convertSupportedCurrenciesWithPrice(
      tmpSupportedCurrencies
        ? tmpSupportedCurrencies
        : [...supportedCurrencies],
      data
    );
    setSupportedCurrencies(convertedData);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getSupportedCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getPriceChanges();
    }, 1000);

    return () => clearInterval(interval);
  }, [getPriceChanges]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <TagList tags={LIST_TAGS} />
          <View style={styles.sortContainer}>
            <Text>Sort by</Text>
            <TouchableHighlight onPress={()=>{}}>
              <View style={styles.buttonSortContainer}>
                <Text>Default</Text>
                <IonIcons name="chevron-down" size={20}/>
              </View>
            </TouchableHighlight>
          </View>
          {supportedCurrencies.map((currency) => (
            <CurrencyItem key={currency.id} currency={currency} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MarketScreen;
