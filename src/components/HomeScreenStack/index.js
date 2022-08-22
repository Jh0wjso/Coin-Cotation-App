import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../HomeScreen";
import GenericCoinScreen from "../GenericCoinScreen";

const Stack = createStackNavigator();

export default function HomeScreenStack(){
    return(
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="GenericCoinScreen" component={GenericCoinScreen}/>
        </Stack.Navigator>
    );
}