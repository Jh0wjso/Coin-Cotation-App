import React, { useState } from "react";
import { View, Text, StatusBar, TextInput, Pressable, Keyboard, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

export default function LoginScreen(){

    const [userName, setUserName] = useState();
    const [password, SetPassword] = useState();

    return(
        <Pressable
            style={styles.container}
            onPress={Keyboard.dismiss}
        >
            <StatusBar backgroundColor="#B22222" barStyle={"light-content"} />
            <View style={styles.headerBackground}>
                <View style={styles.header}>
                    <Text style={styles.logoTextTest} >
                        C
                    </Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View
                    style={styles.inputContent}
                >
                    <Ionicons name={"person-outline"} size={40} color={"#FFFFFF"} />
                    <TextInput
                        placeholder="username"
                        style={styles.inputUsername}
                        value = {userName}
                        placeholderTextColor={"#FFFFFF"}
                    />
                </View>
                <View
                    style={styles.inputContent}
                >
                    <Ionicons name={"key-outline"} size={40} color={"#FFFFFF"} />
                    <TextInput
                        placeholder="......"
                        style={styles.inputUsername}
                        value = {userName}
                        placeholderTextColor={"#FFFFFF"}
                        autoFocus={true}
                        clearTextOnFocus={true}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.buttonLogin}
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.textLogin}>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.registerButton}
                >
                    <Text
                        style={styles.registerText}
                    >
                        Registre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}