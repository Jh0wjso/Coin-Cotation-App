import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity, Text, TextInput, Pressable, Keyboard, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default function RegisterScreen({ navigation }){

    const [isVisiblePassword, setIsVisiblePassword] = useState(true);
    const [isVisiblePasswordConfirm, setIsVisiblePasswordConfirm] = useState(true);

    return(
        <Pressable 
            style={styles.container}
            onPress={Keyboard.dismiss}
        >
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
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
            <ScrollView>
                <StatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
                <View
                    style={styles.disclaimerContent}
                >
                    <Text
                        style={styles.disclaimerText}
                    >
                        Cadastre-se para atualizações da sua moeda favorita.
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
                        <Ionicons name={"eye-off-outline"} size={20} color={"#FFFFFF"} />
                    </View>
                    <View style={styles.inputContent}>
                        <Ionicons
                            name={"mail-outline"}
                            style={styles.closeIcon}
                            size={40}
                            color={"#575555"}
                        />
                        <TextInput 
                            placeholder="E-mail" 
                            style={styles.input}
                            keyboardType={"email-address"}
                        />
                        <Ionicons name={"eye-off-outline"} size={20} color={"#FFFFFF"} />
                    </View>
                    <View style={styles.inputContent}>
                        <Ionicons
                            name={"mail-outline"}
                            style={styles.closeIcon}
                            size={40}
                            color={"#575555"}
                        />
                        <TextInput 
                            placeholder="Confirmar E-mail" 
                            style={styles.input}
                            keyboardType={"email-address"}
                        />
                        <Ionicons name={"eye-off-outline"} size={20} color={"#FFFFFF"} />
                    </View>
                    <View style={styles.inputContent}>
                        <Ionicons
                            name={"key-outline"}
                            style={styles.closeIcon}
                            size={40}
                            color={"#575555"}
                        />
                        <TextInput 
                            placeholder="Senha" 
                            style={styles.input} 
                            secureTextEntry={isVisiblePassword}
                            passwordRules={true}
                            focusable={true}
                        />
                        <TouchableOpacity
                        onPress={() => {
                            setIsVisiblePassword(!isVisiblePassword)
                        }}
                        >
                        {
                            isVisiblePassword ? 
                            <Ionicons name={"eye-off-outline"} size={20} color={"#575555"} />
                            : 
                            <Ionicons name={"eye-outline"} size={20} color={"#575555"} />
                        }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContent}>
                        <Ionicons
                            name={"key-outline"}
                            style={styles.closeIcon}
                            size={40}
                            color={"#575555"}
                        />
                        <TextInput 
                            placeholder="Confirmar Senha" 
                            style={styles.input}
                            secureTextEntry={isVisiblePasswordConfirm}
                            passwordRules={true}   
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setIsVisiblePasswordConfirm(!isVisiblePasswordConfirm)
                            }}
                        >
                            {
                                isVisiblePassword ? 
                                <Ionicons name={"eye-off-outline"} size={20} color={"#575555"} />
                                : 
                                <Ionicons name={"eye-outline"} size={20} color={"#575555"} />
                            }
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.registerButton}
                        onPress={() => navigation.navigate("HomeScreenStack")}
                    >
                        <Text
                            style={styles.registerText}
                        >
                            Vamos Lá
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Pressable>
    )
};