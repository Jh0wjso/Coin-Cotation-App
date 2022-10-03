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
                    Se cadastrando para receber atualizações da sua moeda favorita.
                </Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputContent}>
                    <Ionicons
                        name={"person-circle-outline"}
                        style={styles.closeIcon}
                        size={40}
                        color={"#575555"}
                    />
                    <TextInput placeholder="Nome Completo" style={styles.input} />
                </View>
            </View>
        </View>
    )
};