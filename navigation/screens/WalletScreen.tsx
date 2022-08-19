import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet page</Text>
    </View>
  );
};

export default WalletScreen;
