import React, { useState } from "react";
import { 
    View, 
    StatusBar, 
    Text, 
    TouchableOpacity, 
    Pressable, 
    Keyboard
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import config from '../../config';

import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

export default function SearchScreen({ navigation }){
    const [selectedItem, setSelectedItem] = useState(null);

    console.log(selectedItem);

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
                        onPress={() => navigation.navigate('GenericCoinScreen',
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
                    closeOnSubmit={false}
                    onSelectItem={setSelectedItem}
                    dataSet={[
                        { id: 'bit', title: 'Alpha' },
                        { id: '2', title: 'Beta' },
                        { id: '3', title: 'Gamma' },
                    ]}
                />
                    <View style={styles.searchButton}>
                        <Ionicons name={'search'} style={styles.searchIcon} size={25} color={'gray'} />
                    </View>
                </View>
            </View>
            <View style={styles.disclaimerContariner}>
                <Ionicons name={'search'} style={styles.searchIcon} size={150} color={'gray'} />
                <Text style={styles.disclaimerText}>
                    Aqui você aprocura a moeda que você deseja.
                </Text>
            </View>
        </Pressable>
    );
}