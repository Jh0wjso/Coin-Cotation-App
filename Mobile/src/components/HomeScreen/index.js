import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import config from "../../config";

import MarketCoinScreen from "../MarketCoinScreen";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [lastCoinSale, setlastCoinSale] = useState();
  const [lastCoinSaleEthereum, setlastCoinSaleEthereum] = useState();
  const [lastCoinSaleLite, setlastCoinSaleLite] = useState();

  async function coinInfos() {
    const mercadoBitCoinResonse = await fetch(
      `https://www.mercadobitcoin.net/api/${config.bitcoin.initials}/ticker/`
    );
    const mercadoBitCoinResonseJson = await mercadoBitCoinResonse.json();

    const lastCoinValueResponse = mercadoBitCoinResonseJson.ticker.last;
    setlastCoinSale(lastCoinValueResponse);

    //
    const mercadoBitCoinEthereumResonse = await fetch(
      `https://www.mercadobitcoin.net/api/${config.ethetereum.initials}/ticker/`
    );
    const mercadoBitCoinEthereumResonseJson =
      await mercadoBitCoinEthereumResonse.json();

    const lastEthereumCoinValueResponse =
      mercadoBitCoinEthereumResonseJson.ticker.last;
    setlastCoinSaleEthereum(lastEthereumCoinValueResponse);

    //
    const mercadoBitCoinLiteResonse = await fetch(
      `https://www.mercadobitcoin.net/api/${config.litecoin.initials}/ticker/`
    );
    const mercadoBitCoinLiteResonseJson =
      await mercadoBitCoinLiteResonse.json();

    const lastLiteCoinValueResponse = mercadoBitCoinLiteResonseJson.ticker.last;
    setlastCoinSaleLite(lastLiteCoinValueResponse);
  }

  useEffect(() => {
    coinInfos();
  });

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="white" style="dark" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoName} />
          <Text style={styles.title}>CoinCotation</Text>
        </View>
      </View>
      <View style={styles.cardCoinsContainer}>
        <View style={styles.coinContainer}>
          <View style={styles.cardCoinName}>
            <TouchableOpacity
              style={styles.cardCoinTop}
              onPress={() =>
                navigation.navigate("GenericCoinScreen", {
                  domainName: config.bitcoin.initials,
                  name: config.bitcoin.name,
                })
              }
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "65%",
                }}
              >
                <Image
                  source={require("../../../image/marketImages/bitcoin.png")}
                  style={styles.coinLogo}
                />
                <Text style={styles.coinName}>Bitcoin</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "65%",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Ultima Cotação
                </Text>
                <Text style={styles.coinName}>
                  R$ {parseFloat(lastCoinSale).toFixed(2).replace(".", ",")}{" "}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardCoinTop}
              onPress={() =>
                navigation.navigate("GenericCoinScreen", {
                  domainName: config.ethetereum.initials,
                  name: config.ethetereum.name,
                })
              }
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "65%",
                }}
              >
                <Image
                  source={require("../../../image/marketImages/ethereum.png")}
                  style={styles.coinLogo}
                />
                <Text style={styles.coinNameEthereum}>Ethereum</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "65%",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Ultima Cotação
                </Text>
                <Text
                  style={{ fontSize: 20, color: "#FFFFFF", fontWeight: "bold" }}
                >
                  R${" "}
                  {parseFloat(lastCoinSaleEthereum)
                    .toFixed(2)
                    .replace(".", ",")}{" "}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardCoinTop}
              onPress={() =>
                navigation.navigate("GenericCoinScreen", {
                  domainName: config.litecoin.initials,
                  name: config.litecoin.name,
                })
              }
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "65%",
                }}
              >
                <Image
                  source={require("../../../image/marketImages/Litecoin.png")}
                  style={styles.coinLogo}
                />
                <Text style={styles.coinName}>Litecoin</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "65%",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  Ultima Cotação
                </Text>
                <Text style={styles.coinName}>
                  R$ {parseFloat(lastCoinSaleLite).toFixed(2).replace(".", ",")}{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.contentBtnSeeMore}>
        <View style={styles.contentSeeMore}>
          <Text style={styles.seeAllButtonText}>ONDE COMPAR</Text>
          <Ionicons name={"arrow-down-circle"} size={30} color={"#FFFFFF"} />
        </View>
      </View>
      <MarketCoinScreen />
    </ScrollView>
  );
}
