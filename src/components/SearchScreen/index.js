import React from "react";
import { View, StatusBar, Text, TouchableOpacity, Pressable, Keyboard, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

export default function SearchScreen({ navigation }){
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
                <View style={styles.inputContent}>
                    <TextInput
                        style={styles.input}
                        placeholder="bitcoin"
                        keyboardType="visible-password"
                    />
                    <View style={styles.searchButton}>
                        <Ionicons name={'search'} style={styles.searchIcon} size={25} color={'gray'} />
                    </View>
                </View>
                <View style={styles.suggestions}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('GenericCoinScreen',
                            {
                                domainName: 'BTC'
                            }
                        )}
                    >
                        <Text style={styles.textSuggestion}>bitcoin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('GenericCoinScreen',
                            {
                                domainName: 'ETH'
                            }
                        )}
                    >
                        <Text style={styles.textSuggestion}>ethetreum</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('GenericCoinScreen',
                            {
                                domainName: 'LTC'
                            }
                        )}
                    >
                        <Text style={styles.textSuggestion}>litecoin</Text>
                    </TouchableOpacity>
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