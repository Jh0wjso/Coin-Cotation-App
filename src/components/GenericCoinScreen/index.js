import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export default function GenericCoinScreen({ navigation, route }) {
  const [lastCoinSale, setlastCoinSale] = useState();
  const [highCoinSale, setHighCoinSale] = useState();
  const [last24Vol, setLast24Vol] = useState();
  const [openValue, setOpenValue] = useState();

  async function coinInfos() {
    const mercadoBitCoinResonse = await fetch(
      `https://www.mercadobitcoin.net/api/${route.params.domainName}/ticker/`
    );
    const mercadoBitCoinResonseJson = await mercadoBitCoinResonse.json();

    const lastCoinValueResponse = mercadoBitCoinResonseJson.ticker.last;
    setlastCoinSale(lastCoinValueResponse);

    const lastMarketCapResponse = mercadoBitCoinResonseJson.ticker.high;
    setHighCoinSale(lastMarketCapResponse);

    const last24VolResponse = mercadoBitCoinResonseJson.ticker.vol;
    setLast24Vol(last24VolResponse);

    const last24ChangeResponse = mercadoBitCoinResonseJson.ticker.open;
    setOpenValue(last24ChangeResponse);
  }

  useEffect(() => {
    coinInfos();
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreenStack")}
            >
              <Ionicons
                name={"arrow-back-outline"}
                style={styles.closeIcon}
                size={40}
                color={"#ffffff"}
              />
            </TouchableOpacity>
            <View style={styles.nameContainer}>
              <Text style={styles.nameCoinHeader}>Informações</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("InfoScreen")}>
              <Ionicons
                name={"help-circle-outline"}
                style={styles.userIcon}
                size={40}
                color={"#ffffff"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.mainContentet}>
        <View style={styles.coinNameContent}>
          <Text style={styles.coinName}>{route.params.name}</Text>
          <Text style={styles.initialsCoin}>({route.params.domainName})</Text>
        </View>

        <View style={styles.mainInfos}>
          <View style={styles.cardInfo}>
            <Text style={styles.typeInfo}>Ultima{'\n'}Cotação</Text>
            <Text style={styles.valueCoin}>
              R$ {parseFloat(lastCoinSale).toFixed(2).replace(".", ",")}
            </Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.typeInfo}>Maior{'\n'}Venda/Hoje</Text>
            <Text style={styles.valueCoin}>
              R$ {parseFloat(highCoinSale).toFixed(2).replace(".", ",")}
            </Text>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.typeInfo}>Valor{'\n'}Abertura</Text>
            <Text style={styles.valueCoin}>
              R$ {parseFloat(openValue).toFixed(2).replace(".", ",")}
            </Text>
          </View>
          <View style={styles.cardInfoLast}>
            <Text style={styles.typeInfo}>Volume{'\n'}Hoje</Text>
            <Text style={styles.valueCoin}>
              {parseFloat(last24Vol).toFixed(2).replace(".", ",")}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
