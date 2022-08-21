import React from "react";
import { View, StatusBar, Text, TouchableOpacity, Pressable, Keyboard } from "react-native";
import { TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

export default function SearchScreen(){
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
                    <TouchableOpacity style={styles.searchButton}>
                        <Ionicons name={'search'} style={styles.searchIcon} size={25} color={'#800000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.suggestions}>
                    <TouchableOpacity style={styles.btnSuggestion} >
                        <Text style={styles.textSuggestion}>bitcoin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSuggestion} >
                        <Text style={styles.textSuggestion}>ethetreum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSuggestion} >
                        <Text style={styles.textSuggestion}>litecoin</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.disclaimerContariner}>
                <Ionicons name={'search'} style={styles.searchIcon} size={150} color={'gray'} />
                <Text style={styles.disclaimerText}>
                    Here you choose the crypto you want see the infos in.
                </Text>
            </View>
        </Pressable>
    );
};