import React from "react";
import { View, StatusBar, TouchableOpacity, Text, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default function RegisterScreen({ navigation }){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginScreen")}
                    >
                        <Ionicons
                        name={"arrow-back-outline"}
                        style={styles.closeIcon}
                        size={40}
                        color={"#575555"}
                        />
                    </TouchableOpacity>
                    <Text style={styles.nameScreen}>Cadastre-se</Text>
                </View>
            </View>
            <View
                style={styles.disclaimerContent}
            >
                <Text
                    style={styles.disclaimerText}
                >
                    Se cadastrando você consegue para atualização diárias das sua moeda favorita.
                </Text>
            </View>
        </View>
    )
};