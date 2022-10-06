import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Pressable,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";

export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState();
  const [password, SetPassword] = useState();

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <StatusBar backgroundColor="#B22222" barStyle={"light-content"} />
      <ScrollView
        style={{padding: 40}}
      >
        <View style={styles.headerBackground}>
          <View style={styles.header}>
            <Text style={styles.logoTextTest}>C</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.inputContent}>
            <Ionicons name={"person-outline"} size={40} color={"#FFFFFF"} />
            <TextInput
              placeholder="username"
              style={styles.inputUsername}
              value={userName}
              placeholderTextColor={"#FFFFFFba"}
            />
          </View>
          <View style={styles.inputContent}>
            <Ionicons name={"key-outline"} size={40} color={"#FFFFFF"} />
            <TextInput
              placeholder="......"
              style={styles.inputUsername}
              value={userName}
              placeholderTextColor={"#FFFFFFba"}
              secureTextEntry={true}
              passwordRules={true}
            />
          </View>
          <TouchableOpacity 
            style={styles.buttonLogin}
            onPress={() => {navigation.navigate("HomeScreenStack")}}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.textLogin}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => {navigation.navigate('RegisterScreen')}}
          >
            <Text style={styles.registerText}>Registre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Pressable>
  );
}
