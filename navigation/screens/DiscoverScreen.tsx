import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Discover page</Text>
    </View>
  );
};

export default DiscoverScreen;
