import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Modal } from "react-native";
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

  const [modalVisible, setModalVisible] = useState(false);
  const [lastSaleModalVisible, setLastSaleModalVisible] = useState(false);
  const [openValueModalVisible, setOpenValueModalVisible] = useState(false);
  const [volModalVisible, setVolModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle={"dark-content"} />
      <View style={styles.headerBackground}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name={"arrow-back-outline"}
                style={styles.closeIcon}
                size={40}
                color={"#292828"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.mainContentet}>
        <View style={styles.coinNameContent}>
          <View style={styles.nameContent}>
            <Text style={styles.coinName}>{route.params.name}</Text>
          </View>
          <Text style={styles.initialsCoin}>({route.params.domainName})</Text>
        </View>

        <View style={styles.mainInfos}>
          <TouchableOpacity
            style={styles.cardInfo}
            onPress={() => setModalVisible(true)}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert(
                  "A Ultima cotação, representa a ultima cotação da moeda no dia até o momento da cotação."
                );
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    A Ultima cotação, representa a ultima cotação da moeda no
                    dia até o momento da cotação.
                  </Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Text style={styles.typeInfo}>Ultima{"\n"}Cotação</Text>
            <Text style={styles.valueCoin}>
              R$ {parseFloat(lastCoinSale).toFixed(2).replace(".", ",")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            TouchableOpacity
            style={styles.cardInfo}
            onPress={() => setLastSaleModalVisible(true)}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={lastSaleModalVisible}
              onRequestClose={() => {
                Alert.alert(
                  "A maior venda, representa a maior venda da moeda no dia até o momento da cotação."
                );
                setModalVisible(!lastSaleModalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    A maior venda, representa a maior venda da moeda no dia até
                    o momento da cotação.
                  </Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() =>
                      setLastSaleModalVisible(!lastSaleModalVisible)
                    }
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Text style={styles.typeInfo}>Maior{"\n"}Venda/Hoje</Text>
            <Text style={styles.valueCoin}>
              R$ {parseFloat(highCoinSale).toFixed(2).replace(".", ",")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardInfo}
            onPress={() => setOpenValueModalVisible(true)}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={openValueModalVisible}
              onRequestClose={() => {
                Alert.alert(
                  "O valor abertura, representa o preço por unidade de abertura de negociação no dia até o momento da cotação."
                );
                setOpenValueModalVisible(!openValueModalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    O valor abertura, representa o preço por unidade de abertura
                    de negociação no dia até o momento da cotação.
                  </Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() =>
                      setOpenValueModalVisible(!openValueModalVisible)
                    }
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Text style={styles.typeInfo}>Valor{"\n"}Abertura</Text>
            <Text style={styles.valueCoin}>
              R$ {parseFloat(openValue).toFixed(2).replace(".", ",")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardInfo}
            onPress={() => setVolModalVisible(true)}
          >
            <Modal
              animationType="slide"
              transparent={true}
              visible={volModalVisible}
              onRequestClose={() => {
                Alert.alert(
                  "O volume, representa a quantidade negociada nas ultimas 24 horas até a cotação."
                );
                setVolModalVisible(!volModalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    O volume, representa a quantidade negociada nas ultimas 24
                    horas até a cotação.
                  </Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setVolModalVisible(!volModalVisible)}
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <Text style={styles.typeInfo}>Volume{"\n"}Hoje</Text>
            <Text style={styles.valueCoin}>
              {parseFloat(last24Vol).toFixed(2).replace(".", ",")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
