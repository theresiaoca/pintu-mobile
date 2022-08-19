import { Text, View, StyleSheet } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: 230,
  },
  icon: {
    paddingRight: 15,
  },
});

const HeaderBar = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Market</Text>
      <View style={styles.iconContainer}>
        <IonIcons name="star-outline" size={24} style={styles.icon} />
        <IonIcons name="search-outline" size={24} />
      </View>
    </View>
  );
};
export default HeaderBar;
