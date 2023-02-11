import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MarketCoinScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.marketsContainer}>
        <TouchableOpacity
          style={styles.cardBackground}
          onPress={() => {
            Linking.openURL("https://www.mercadobitcoin.com.br/");
          }}
        >
          <View style={styles.card}>
            <View style={styles.contentText}>
              <Text style={styles.messageWelcome2USer}>Mercado Bitcoin</Text>
            </View>
            <Image
              source={require("../../../image/marketImages/mercadoBitcoin.png")}
              style={{
                width: 50,
                height: 55,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Linking.openURL("https://www.binance.com/");
          }}
        >
          <Image
            source={require("../../../image/marketImages/binance.png")}
            style={styles.logoMarket}
          />
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>Binance</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Linking.openURL("https://www.coingecko.com/");
          }}
        >
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>CoinGecko</Text>
          </View>
          <Image
            source={require("../../../image/marketImages/coinGecko.jpeg")}
            style={styles.logoMarket}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Linking.openURL("https://www.coinbase.com/");
          }}
        >
          <Image
            source={require("../../../image/marketImages/coinBase.png")}
            style={styles.logoMarket}
          />
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>CoinBase</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Linking.openURL("https://www.novadax.com/");
          }}
        >
          <View style={styles.contentText}>
            <Text style={styles.messageWelcome2USer}>NovaDAX</Text>
          </View>
          <Image
            source={require("../../../image/marketImages/novaDax.png")}
            style={styles.logoMarket}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.disclaimerButton}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert(
              "Esse app não possui parceria com nenhum desses mercados de criptomoedas."
            );
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Esse app não possui parceria com nenhum desses mercados de
                criptomoedas.
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
        <View style={styles.contentDisclaimer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name={"help-circle"} size={40} color={"#FFFFFF"} />
          </TouchableOpacity>
          <Text style={styles.aboutText}>Atenção</Text>
        </View>
      </View>
    </View>
  );
}
