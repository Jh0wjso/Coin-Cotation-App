import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./HomeScreen";
//import MarketsScreen from "./MarketsScreen";
import SearchScreen from "./SearchScreen";
import UserSreen from './UserScreen';

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
/*                    else if (route.name === 'Compar')
                        iconName = 'logo-bitcoin'*/
                    else if (route.name === 'Procurar')
                        iconName = 'search-outline'  
                    else if (route.name === 'Login')
                        iconName = 'person-outline'  
                    
                    return <Ionicons name={iconName} size={20} color={color} />;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#800000',
                tabBarActiveBackgroundColor: '#800000',
                tabBarInactiveBackgroundColor: '#800000',
                tabBarInactiveBackgroundColor: '#fff',
                tabBarStyle: {
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: '#800000'
                },
                headerShown: false,
                tabBarItemStyle:{
                    borderRadius: 5,
                    margin: 2
                }
            })}
        >
            <BottomTab.Screen name="Inicial" component={HomeScreen}/>
            <BottomTab.Screen name="Procurar" component={SearchScreen}/>
            <BottomTab.Screen name="Login" component={UserSreen} />
        </BottomTab.Navigator>
    );
}