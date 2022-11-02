import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function MarketCoinScreen() {
  return (
    <View style={styles.container}>
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
