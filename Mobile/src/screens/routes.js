import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GenericCoinScreen from "./GenericCoinScreen";
import HomeScreenBottomTabs from "./HomeScreenBottomTabs";
import MarketCoinScreen from "./MarketCoinScreen";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreenBottomTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreenBottomTabs" component={HomeScreenBottomTabs} />
      <Stack.Screen name="GenericCoinScreen" component={GenericCoinScreen} />
      <Stack.Screen name="MarketCoinScreen" component={MarketCoinScreen} />
    </Stack.Navigator>
  );
}