import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
};

export default HomeScreen;
