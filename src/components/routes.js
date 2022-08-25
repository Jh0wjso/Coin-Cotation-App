import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GenericCoinScreen from "./GenericCoinScreen";
import HomeScreenStack from "./HomeScreenStack";

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
            initialRouteName="HomeScreenStack"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreenStack" component={HomeScreenStack}/>
            <Stack.Screen name="GenericCoinScreen" component={GenericCoinScreen}/>
        </Stack.Navigator>
    );
}