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
          if (route.name === "Inicial") iconName = "home-outline";
          else if (route.name === "Procurar") iconName = "search-outline";
          else if (route.name === "Login") iconName = "person-outline";

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveBackgroundColor: "#740101",
        tabBarInactiveBackgroundColor: "#131111",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: "#1a1919"}
      })}
    >
      <BottomTab.Screen name="Inicial" component={HomeScreen} />
      <BottomTab.Screen name="Procurar" component={SearchScreen} />
    </BottomTab.Navigator>
  );
}
