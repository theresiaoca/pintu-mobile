import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Account page</Text>
    </View>
  );
};

export default AccountScreen;
