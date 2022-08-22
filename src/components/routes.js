import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchScreen from "./SearchScreen";
import UserSreen from './UserScreen';
import HomeScreenStack from "./HomeScreenStack";

const BottomTab = createBottomTabNavigator();

export default function Routes(){
    return(
        <BottomTab.Navigator
            
            tabBarOptions={{
                showLabel: false,
            }}

            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName;

                    if (route.name === 'Inicial')
                        iconName = 'home-outline'
                    else if (route.name === 'Procurar')
                        iconName = 'search-outline'  
                    else if (route.name === 'Login')
                        iconName = 'person-outline'  
                    
                    return <Ionicons name={iconName} size={20} color={color} />;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: '#6968687e',
                tabBarInactiveBackgroundColor: '#6968687e',
                tabBarInactiveBackgroundColor: '#6968687e',
                headerShown: false,
            })}
        >
            <BottomTab.Screen name="Inicial" component={HomeScreenStack}/>
            <BottomTab.Screen name="Procurar" component={SearchScreen}/>
            <BottomTab.Screen name="Login" component={UserSreen} />
        </BottomTab.Navigator>
    );
}