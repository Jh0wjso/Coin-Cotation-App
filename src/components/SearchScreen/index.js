import React, { useState } from "react";
import { 
    View, 
    StatusBar, 
    Text, 
    TouchableOpacity, 
    Pressable, 
    Keyboard,
    Vibration
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import config from '../../config';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

export default function SearchScreen({ navigation }){
    const [selectedItem, setSelectedItem] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function alertUser(){
        Vibration.vibrate();
        setErrorMessage("*Preencha o campo a cima!")
    }

    return(
        <Pressable onPress={Keyboard.dismiss}  style={styles.container}>
            <StatusBar backgroundColor='#B22222'barStyle={"light-content"} />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.logoName}>
                        <Text style={styles.tittleScreen}>Search</Text>
                        <Text style={styles.strongText}>coins</Text>
                    </View>
                </View>
            </View>
            <View style={styles.inputContainer}>
                
                <View style={styles.suggestions}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('GenericCoinScreen',
                            {
                                domainName: config.bitcoin.initials,
                                name: config.bitcoin.name
                            }
                        )}
                    >
                        <Text style={styles.textSuggestion}>bitcoin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress= {() => navigation.navigate('GenericCoinScreen',
                            {
                                domainName: config.ethetereum.initials,
                                name: config.ethetereum.name
                            }
                        )}
                    >
                        <Text style={styles.textSuggestion}>ethetereum</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('GenericCoinScreen',
                            {
                                domainName: config.litecoin.initials,
                                name: config.litecoin.name
                            }
                        )}
                    >
                        <Text style={styles.textSuggestion}>litecoin</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContent}>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        suggestionsListContainerStyle= {{
                            backgroundColor: "#ffffff"
                        }}
                        suggestionsListTextStyle={{
                            color: "#B22222",
                            fontWeight: "bold"
                        }}
                        onSelectItem={setSelectedItem}
                        dataSet={[
                            { id: config.aave.initials, title: config.aave.name },
                            { id: config.alchemypay.initials, title: config.alchemypay.name },
                            { id: config.acmilan.initials, title: config.acmilan.name },
                            { id: config.cardano.initials, title: config.cardano.name },
                            { id: config.adshares.initials, title: config.adshares.name },
                            { id: config.singularityNET.initials, title: config.singularityNET.name },
                            { id: config.aioz.initials, title: config.aioz.name },
                            { id: config.alchemix.initials, title: config.alchemix.name },
                            { id: config.algorand.initials, title: config.algorand.name },
                            { id: config.myNeighborAlice.initials, title: config.myNeighborAlice.name },
                            { id: config.alliance.initials, title: config.alliance.name },
                            { id: config.alphaVentureDao.initials, title: config.alphaVentureDao.name },
                            { id: config.astonMartin.initials, title: config.astonMartin.name },
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
                            { id: config.decentralGames.initials, title: config.decentralGames.name },
                            { id: config.dia.initials, title: config.dia.name },
                            { id: config.polkadot.initials, title: config.polkadot.name },
                            { id: config.dpi.initials, title: config.dpi.name },
                            { id: config.dydx.initials, title: config.dydx.name },
                            //
                            { id: config.corinthians.initials, title: config.corinthians.name },
                            { id: config.palmeiras.initials, title: config.palmeiras.name },
                            { id: config.manchesterCity.initials, title: config.manchesterCity.name },
                            { id: config.flamengo.initials, title: config.flamengo.name },
                            { id: config.barcelona.initials, title: config.barcelona.name },
                            { id: config.bitcoin.initials, title: config.bitcoin.name },
                            { id: config.ethetereum.initials, title: config.ethetereum.name },
                            { id: config.litecoin.initials, title: config.litecoin.name },
                            { id: config.doge.initials, title: config.doge.name }
                        ]}
                        inputContainerStyle={{
                            width: 250,
                            borderTopEndRadius: 0,
                            borderBottomRightRadius: 0,
                            height: 40,
                            backgroundColor: "#f6f6f6",
                            marginBottom: 10,
                        }}
                    />
                        {
                            selectedItem != null ?
                            <TouchableOpacity 
                            style={styles.searchButton}
                            onPress={() => navigation.navigate('GenericCoinScreen',
                                {
                                    domainName: selectedItem.id,
                                    name: selectedItem.title
                                },
                                setErrorMessage(' ')
                            )}
                            >
                                <Ionicons name={'search'} style={styles.searchIcon} size={25} color={'#ffffff'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity 
                                style={styles.searchButton}
                                onPress={() => alertUser()}
                            >
                                <Ionicons name={'search'} style={styles.searchIcon} size={25} color={'#ffffff'} />
                            </TouchableOpacity>
                        }
                </View>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
            
        </Pressable>
    );
}