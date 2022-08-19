import { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import IonIcons from "react-native-vector-icons/Ionicons";

import { ConvertedSupportedCurrenciesType } from "../../types";

type CurrencyItemProps = {
  currency: ConvertedSupportedCurrenciesType;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol:{
    paddingLeft: 8,
    color: "grey"
  },
  name: {
    paddingLeft: 8,
    fontWeight: "bold",
    fontSize: 16
  },
  priceContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
});

const CurrencyItem = ({ currency }: CurrencyItemProps) => {
  const isPercentageUp = useMemo(() => {
    const percentage = parseFloat(currency.day?.split("%")?.[0] || "0");
    if (percentage > 0) return true;
    return false;
  }, [currency.day]);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <SvgUri uri={currency.logo} color={currency.color} />
        <View>
          <Text style={styles.name}>{currency.name}</Text>
          <Text style={styles.currencySymbol}>{currency.currencySymbol}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={{fontWeight:"bold", fontSize: 16}}>{currency.latestPrice}</Text>
        <Text
          style={{
            color: isPercentageUp ? "rgb(28, 203, 33)" : "rgb(255, 90, 90)",
          }}
        >
          <IonIcons name={isPercentageUp ? "caret-up" : "caret-down"} size={16}/>
          {currency.day?.replace("-", "")}
        </Text>
      </View>
    </View>
  );
};

export default CurrencyItem;
