import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";


export default function GenericCoinScreen({ navigation }){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#B22222'barStyle={"light-content"} />
            <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <Ionicons name={'close-outline'} style={styles.closeIcon} size={40} color={'gray'} />
                    </TouchableOpacity>

            </View>
        </View>
    )
}