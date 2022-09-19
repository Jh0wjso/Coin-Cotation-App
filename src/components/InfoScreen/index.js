import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

//Ultima venda
//Maior Venda
//Valor Abertura
//Volume

export default function InfoScreen({ navigation }){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreenStack')}
                >
                    <Ionicons name={'close-outline'} style={styles.closeIcon} size={40} color={'#B22222'} />
                </TouchableOpacity>
            </View>

            <Text
                style={styles.infomationText}
            >
                Os Valores podem variar a partir de cada mecanismos de cotação.
            </Text>
            <View style={styles.infoContainer}>
                
                <View style={styles.infoContent}>
                    <Text style={styles.infoName}>Maior Venda</Text>
                    <Text style={styles.infomation}>A maior venda, representa a maior venda da moeda no dia até o momento da cotação.</Text>
                </View>
                <View style={styles.infoContent}>
                    <Text style={styles.infoName}>Ultima Cotação</Text>
                    <Text style={styles.infomation}>A Ultima cotação, representa a ultima cotação da moeda no dia até o momento da cotação.</Text>
                </View>
                <View style={styles.infoContent}>
                    <Text style={styles.infoName}>Valor Abertura</Text>
                    <Text style={styles.infomation}>O valor abertura, representa o preço por unidade de abertura de negociação no dia até o momento da cotação.</Text>
                </View>
                <View style={styles.lastInfoContent}>
                    <Text style={styles.infoName}>Volume</Text>
                    <Text style={styles.infomation}>O volume, representa a quantidade negociada nas ultimas 24 horas até a cotação.</Text>
                </View>
            </View>
        </View>
    )
}