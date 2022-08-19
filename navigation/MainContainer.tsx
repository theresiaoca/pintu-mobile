import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import MarketScreen from "./screens/MarketScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import AccountScreen from "./screens/AccountScreen";
import WalletScreen from "./screens/WalletScreen";
import {
  ACCOUNT_NAME,
  DISCOVER_NAME,
  HOME_NAME,
  MARKET_NAME,
  WALLET_NAME,
} from "./constant";
import HeaderBar from "./screens/components/HeaderBar";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={MARKET_NAME}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";
            let routeName = route.name;

            if (routeName === HOME_NAME) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === DISCOVER_NAME) {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (routeName === MARKET_NAME) {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            } else if (routeName === WALLET_NAME) {
              iconName = focused ? "wallet" : "wallet-outline";
            } else if (routeName === ACCOUNT_NAME) {
              iconName = focused ? "person" : "person-outline";
            }

            return <IonIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={HOME_NAME} component={HomeScreen} />
        <Tab.Screen name={DISCOVER_NAME} component={DiscoverScreen} />
        <Tab.Screen name={MARKET_NAME} component={MarketScreen} options={{headerTitle: (props) => <HeaderBar {...props}/>}}/>
        <Tab.Screen name={WALLET_NAME} component={WalletScreen} />
        <Tab.Screen name={ACCOUNT_NAME} component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
