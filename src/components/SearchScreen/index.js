import React, { useState } from "react";
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Vibration,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import config from "../../config";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

export default function SearchScreen({ navigation }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function alertUser() {
    Vibration.vibrate();
    setErrorMessage("*Preencha o campo a cima!");
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoName}>
            <Text style={styles.tittleScreen}>Procure</Text>
            <Text style={styles.strongText}>uma moeda</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text
          style={styles.quickAcess}
        >
          Acesso Rapido
        </Text>
        <View style={styles.suggestions}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("GenericCoinScreen", {
                domainName: config.bitcoin.initials,
                name: config.bitcoin.name,
              })
            }
            style={styles.coinContent}
          >
            
            <Image source={require("../../../image/marketImages/bitcoin.png")}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("GenericCoinScreen", {
                domainName: config.ethetereum.initials,
                name: config.ethetereum.name,
              })
            }
            style={styles.coinContent}
          >
            <Image source={require("../../../image/marketImages/ethereum.png")}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("GenericCoinScreen", {
                domainName: config.litecoin.initials,
                name: config.litecoin.name,
              })
            }
            style={styles.coinContent}
          >
            <Image source={require("../../../image/marketImages/Litecoin.png")}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("GenericCoinScreen", {
                domainName: config.aave.initials,
                name: config.aave.name,
              })
            }
            style={styles.coinContent}
          >
            <Image source={require("../../../image/marketImages/aave.png")}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContent}>
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            suggestionsListContainerStyle={{
              backgroundColor: "#292828",
            }}
            suggestionsListTextStyle={{
              color: "#ffffff",
              fontWeight: "bold",
            }}
            onSelectItem={setSelectedItem}
            dataSet={[
              { id: config.aave.initials, title: config.aave.name },
              { id: config.alchemypay.initials, title: config.alchemypay.name },
              { id: config.acmilan.initials, title: config.acmilan.name },
              { id: config.cardano.initials, title: config.cardano.name },
              { id: config.adshares.initials, title: config.adshares.name },
              {
                id: config.singularityNET.initials,
                title: config.singularityNET.name,
              },
              { id: config.aioz.initials, title: config.aioz.name },
              { id: config.alchemix.initials, title: config.alchemix.name },
              { id: config.algorand.initials, title: config.algorand.name },
              {
                id: config.myNeighborAlice.initials,
                title: config.myNeighborAlice.name,
              },
              { id: config.alliance.initials, title: config.alliance.name },
              {
                id: config.alphaVentureDao.initials,
                title: config.alphaVentureDao.name,
              },
              {
                id: config.astonMartin.initials,
                title: config.astonMartin.name,
              },
              { id: config.amp.initials, title: config.amp.name },
              { id: config.ankr.initials, title: config.ankr.name },
              { id: config.aragon.initials, title: config.aragon.name },
              { id: config.apeCoin.initials, title: config.apeCoin.name },
              { id: config.argentina.initials, title: config.argentina.name },
              { id: config.roma.initials, title: config.roma.name },
              { id: config.atlas.initials, title: config.atlas.name },
              { id: config.cosmos.initials, title: config.cosmos.name },
              { id: config.audius.initials, title: config.audius.name },
              { id: config.avalanche.initials, title: config.avalanche.name },
              { id: config.axie.initials, title: config.axie.name },
              { id: config.balancer.initials, title: config.balancer.name },
              { id: config.badger.initials, title: config.badger.name },
              { id: config.bitCash.initials, title: config.bitCash.name },
              { id: config.bancor.initials, title: config.bancor.name },
              { id: config.biconomy.initials, title: config.biconomy.name },
              { id: config.bluzelle.initials, title: config.bluzelle.name },
              { id: config.braintrust.initials, title: config.braintrust.name },
              { id: config.ceek.initials, title: config.ceek.name },
              { id: config.chiliz.initials, title: config.chiliz.name },
              { id: config.clover.initials, title: config.clover.name },
              { id: config.compound.initials, title: config.compound.name },
              { id: config.coti.initials, title: config.coti.name },
              { id: config.curve.initials, title: config.curve.name },
              { id: config.cartesi.initials, title: config.cartesi.name },
              { id: config.civic.initials, title: config.civic.name },
              { id: config.convex.initials, title: config.convex.name },
              {
                id: config.decentralGames.initials,
                title: config.decentralGames.name,
              },
              { id: config.dia.initials, title: config.dia.name },
              { id: config.polkadot.initials, title: config.polkadot.name },
              { id: config.dpi.initials, title: config.dpi.name },
              { id: config.dydx.initials, title: config.dydx.name },
              { id: config.energia.initials, title: config.energia.name },
              { id: config.energia2.initials, title: config.energia2.name },
              { id: config.enjin.initials, title: config.enjin.name },
              {
                id: config.ethereumService.initials,
                title: config.ethereumService.name,
              },
              { id: config.ethernity.initials, title: config.ethernity.name },
              { id: config.harvest.initials, title: config.harvest.name },
              { id: config.fetch.initials, title: config.fetch.name },
              { id: config.filecoin.initials, title: config.filecoin.name },
              { id: config.floki.initials, title: config.floki.name },
              { id: config.flow.initials, title: config.flow.name },
              { id: config.gala.initials, title: config.gala.name },
              {
                id: config.galatasaray.initials,
                title: config.galatasaray.name,
              },
              { id: config.cam.initials, title: config.cam.name },
              { id: config.aavegotchi.initials, title: config.aavegotchi.name },
              { id: config.stepn.initials, title: config.stepn.name },
              { id: config.gnosis.initials, title: config.gnosis.name },
              {
                id: config.godsUnchained.initials,
                title: config.godsUnchained.name,
              },
              { id: config.graph.initials, title: config.graph.name },
              {
                id: config.satoshiToken.initials,
                title: config.satoshiToken.name,
              },
              { id: config.highstreet.initials, title: config.highstreet.name },
              { id: config.holo.initials, title: config.holo.name },
              {
                id: config.internetComputer.initials,
                title: config.internetComputer.name,
              },
              { id: config.illuvium.initials, title: config.illuvium.name },
              { id: config.immutableX.initials, title: config.immutableX.name },
              { id: config.intermilan.initials, title: config.intermilan.name },
              { id: config.juventus.initials, title: config.juventus.name },
              {
                id: config.corinthians.initials,
                title: config.corinthians.name,
              },
              { id: config.palmeiras.initials, title: config.palmeiras.name },
              {
                id: config.manchesterCity.initials,
                title: config.manchesterCity.name,
              },
              { id: config.flamengo.initials, title: config.flamengo.name },
              { id: config.barcelona.initials, title: config.barcelona.name },
              { id: config.bitcoin.initials, title: config.bitcoin.name },
              { id: config.ethetereum.initials, title: config.ethetereum.name },
              { id: config.litecoin.initials, title: config.litecoin.name },
              { id: config.doge.initials, title: config.doge.name },
              { id: config.metaVerse.initials, title: config.metaVerse.name },
              { id: config.portugal.initials, title: config.portugal.name },
              { id: config.power.initials, title: config.power.name },
              { id: config.psg.initials, title: config.psg.name },
              { id: config.quant.initials, title: config.quant.name },
              { id: config.radio.initials, title: config.radio.name },
              { id: config.interRS.initials, title: config.interRS.name },
              { id: config.sandBox.initials, title: config.sandBox.name },
              { id: config.spfc.initials, title: config.spfc.name },
              { id: config.ufc.initials, title: config.ufc.name },
              { id: config.dolar.initials, title: config.dolar.name },
              { id: config.santos.initials, title: config.santos.name },
              { id: config.vasco.initials, title: config.vasco.name },
            ]}
            inputContainerStyle={{
              width: 300,
              borderTopEndRadius: 0,
              borderBottomRightRadius: 0,
              height: 50,
              alignItems: "center",
              backgroundColor: "#ffffff",
              zIndex: 1000,
              marginBottom: 10,
              shadowColor: "#ffffff"
            }}
          />
          {selectedItem != null ? (
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() =>
                navigation.navigate(
                  "GenericCoinScreen",
                  {
                    domainName: selectedItem.id,
                    name: selectedItem.title,
                  },
                  setErrorMessage(" ")
                )
              }
            >
              <Ionicons
                name={"search"}
                style={styles.searchIcon}
                size={25}
                color={"#ffffff"}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => alertUser()}
            >
              <Ionicons
                name={"search"}
                style={styles.searchIcon}
                size={25}
                color={"#ffffff"}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
    </Pressable>
  );
}
