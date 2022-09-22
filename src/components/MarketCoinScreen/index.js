import React from "react";
import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";


export default function MarketCoinScreen({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#B22222' barStyle={"light-content"} />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreenStack')}
                    >
                        <Ionicons name={'arrow-back-outline'} style={styles.closeIcon} size={40} color={'#B22222'} />
                    </TouchableOpacity>
                    <View style={styles.logoName}/>
                        <Text style={styles.messageUser}>CoinCotation</Text>
                    <View/>
                </View>
            </View>
            <View style={styles.marketsContainer}>
                <View style={styles.cardBackground}>
                    <View style={styles.card}>
                        <View style={styles.contentText}>
                            <Text style={styles.messageWelcome2USer}>
                                Mercado Bitcoin
                            </Text>
                        </View>
                        <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={70} color={'#FFA500'} />
                    </View>
                </View>
                <View style={styles.card}>
                    <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={70} color={'#FFA500'} />
                    <View style={styles.contentText}>
                        <Text style={styles.messageWelcome2USer}>
                            Binance
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.contentText}>
                        <Text style={styles.messageWelcome2USer}>
                            CoinGecko
                        </Text>
                    </View>
                    <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={70} color={'#FFA500'} />
                </View>
                <View style={styles.card}>
                    <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={70} color={'#FFA500'} />
                    <View style={styles.contentText}>
                        <Text style={styles.messageWelcome2USer}>
                            CoinBase
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.contentText}>
                        <Text style={styles.messageWelcome2USer}>
                            NovaDAX
                        </Text>
                    </View>
                    <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={70} color={'#FFA500'} />
                </View>
            </View>
        </View>
    )
}