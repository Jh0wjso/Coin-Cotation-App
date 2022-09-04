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
        window.alert('Selecione Uma modeda!');
        Vibration.vibrate();
        setErrorMessage("Selecione uma moeda!")
    }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
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
                            },
                            setErrorMessage(null)
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
                        backgroundColor: "#B22222"
                    }}
                    suggestionsListTextStyle={{
                        color: "#ffffff",
                        fontWeight: "bold"
                    }}
                    onSelectItem={setSelectedItem}
                    dataSet={[
                        { id: 'AAVE', title: 'Aave' },
                        { id: 'BTC', title: 'Bitcoin' },
                        { id: 'ETH', title: 'Ethereum' },
                        { id: 'LTC', title: 'Litecoin' },
                        { id: 'DOGE', title: 'DogeCoin' },

                    ]}
                    inputContainerStyle={{
                        width: 250,
                        borderTopEndRadius: 0,
                        borderBottomRightRadius: 0,
                        height: 40,
                        backgroundColor: "#f6f6f6",
                        position: "relative",
                        marginBottom: 10
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
                            }
                        )}
                        >
                            <Ionicons name={'search'} style={styles.searchIcon} size={25} color={'gray'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity 
                            style={styles.searchButton}
                            onPress={() => alertUser()}
                        >
                            <Ionicons name={'search'} style={styles.searchIcon} size={25} color={'gray'} />
                        </TouchableOpacity>
                    }
                </View>
                <Text>{errorMessage}</Text>
            </View>
        </Pressable>
    );
}