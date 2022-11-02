import React from "react";
import { View, StatusBar, Text, TouchableOpacity, Alert, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default function MarketCoinScreen({ navigation }) {
  const createThreeButtonAlert = () =>
    Alert.alert(
      "ATENÇÃO!!!",
      "Esse App, não tem parceria com nenhum desses mercados de criptomoemas! Apenas serve para informar os usuários sobre sites confiáveis para a compra caso se interessem!",
      [{ text: "OK" }]
    );


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B22222" barStyle={"light-content"} />
      <View style={styles.headerBackground}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name={"arrow-back-outline"}
                style={styles.closeIcon}
                size={40}
                color={"#FFFFFF"}
              />
            </TouchableOpacity>
            <View style={styles.logoName} />
            <View />
            <TouchableOpacity onPress={() => createThreeButtonAlert()}>
              <Ionicons
                name={"information-circle-outline"}
                style={styles.closeIcon}
                size={40}
                color={"#FFFFFF"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.marketsContainer}>
        <View style={styles.cardBackground}>
          <View style={styles.card}>
            <View style={styles.contentText}>
              <Text style={styles.messageWelcome2USer}>Mercado Bitcoin</Text>
            </View>
            <Image
              source={require('../../../image/marketImages/mercadoBitcoin.png')}
              style={styles.logoMarket}
            />
          </View>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../../../image/marketImages/binance.png')}
            style={styles.logoMarket}
          />
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>Binance</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>CoinGecko</Text>
          </View>
          <Image
            source={require('../../../image/marketImages/coinGecko.jpeg')}
            style={styles.logoMarket}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={require('../../../image/marketImages/coinBase.png')}
            style={styles.logoMarket}
          />
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>CoinBase</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>NovaDAX</Text>
          </View>
          <Image
            source={require('../../../image/marketImages/novaDax.png')}
            style={styles.logoMarket}
          />
        </View>
      </View>
    </View>
  );
}
