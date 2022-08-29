import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";


export default function InfoScreen({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreenStack')}
                    >
                        <Ionicons name={'close-outline'} style={styles.closeIcon} size={40} color={'#ffffff'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}