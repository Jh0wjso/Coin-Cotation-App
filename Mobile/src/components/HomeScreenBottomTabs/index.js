import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import SearchScreen from "../SearchScreen";
import HomeScreen from "../HomeScreen";

const BottomTab = createBottomTabNavigator();

export default function HomeScreenBottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Inicial") iconName = "home";
          else if (route.name === "Procurar") iconName = "search";

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#8d8d8d",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: "#111111", height: 42}
      })}
    >
      <BottomTab.Screen name="Inicial" component={HomeScreen} />
      <BottomTab.Screen name="Procurar" component={SearchScreen} />
    </BottomTab.Navigator>
  );
}
