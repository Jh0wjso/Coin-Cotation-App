import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GenericCoinScreen from "./GenericCoinScreen";
import HomeScreenStack from "./HomeScreenStack";
import InfoScreen from "./InfoScreen";
import MarketCoinScreen from "./MarketCoinScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreenStack" component={HomeScreenStack} />
      <Stack.Screen name="GenericCoinScreen" component={GenericCoinScreen} />
      <Stack.Screen name="MarketCoinScreen" component={MarketCoinScreen} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}