import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import config from "../../config";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoName} />
          <Text style={styles.title}>CoinCotation</Text>
          <Text style={styles.secondName}>App</Text>
        </View>
      </View>
      <View style={styles.cardBackground}>
        <View style={styles.card}>
          <View style={styles.imageCoin}>
            <Image source={require("../../../image/marketImages/bitcoin.png")}
              style={styles.coinLogo}
            />
          </View>
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>
              Veja informações da sua moeda preferida.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardCoinsContainer}>
        <View style={styles.contentTextCoins}>
          <Text style={styles.strongText}>MOEDAS EM ALTA</Text>
        </View>
        <View style={styles.coinContainer}>
          
            <View
              style={styles.cardCoinName}
            >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("GenericCoinScreen", {
                  domainName: config.bitcoin.initials,
                  name: config.bitcoin.name,
                })
              }
              style={styles.cardCoinTop}
            >
              <Image source={require("../../../image/marketImages/coinImage.png")}
                style={styles.coinLogo}
              />
            </TouchableOpacity>
            <Text style={styles.coinName}>Bitcoin</Text>
          </View>

          <View
            style={styles.cardCoinName}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("GenericCoinScreen", {
                  domainName: config.ethetereum.initials,
                  name: config.ethetereum.name,
                })
              }
              style={styles.cardCoinTop}
            >
              <Image source={require("../../../image/marketImages/ethereum.png")}
                style={styles.coinLogo}
              />
            </TouchableOpacity>
            <Text style={styles.coinName}>Ethereum</Text>
          </View>

            <View
              style={styles.cardCoinName}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("GenericCoinScreen", {
                    domainName: config.litecoin.initials,
                    name: config.litecoin.name,
                  })
                }
                style={styles.cardCoinTop}
              >
                <Image source={require("../../../image/marketImages/Litecoin.png")}
                  style={styles.coinLogo}
                />
              </TouchableOpacity>
              <Text style={styles.coinName}>Litecoin</Text>
            </View>

          <View style={styles.containerBottom}>
          </View>
        </View>
      </View>
      <View style={styles.contentBtnSeeMore}>
        <TouchableOpacity
          style={styles.btnSeeMore}
          onPress={() => navigation.navigate("MarketCoinScreen")}
        >
          <Text style={styles.seeAllButtonText}>ONDE COMPAR</Text>
          <Ionicons name={"arrow-forward-circle"} size={30} color={"#B22222"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
