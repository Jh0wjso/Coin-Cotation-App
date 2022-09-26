import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B22222" barStyle={"light-content"} />
    </View>
  );
}