import React from "react";
import { View, StatusBar, Text } from "react-native";
import styles from "./styles";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoName} />
          <Text style={styles.title}>Opções</Text>
          <Text style={styles.secondName}>De Usuario</Text>
        </View>
      </View>
    </View>
  );
}