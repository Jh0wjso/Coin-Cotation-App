import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoName} />
          <Text style={styles.title}>Opções</Text>
        </View>
      </View>
    </View>
  );
}