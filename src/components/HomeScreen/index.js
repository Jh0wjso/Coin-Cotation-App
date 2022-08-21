import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function HomeScreen(){

    const [lastBitCoinValue, setlastBitCoinSale] = useState();
    const [lastEthereumValue, setlastEthereumValue] = useState();
    const [lastTetherValue, setlastTetherValue] = useState();
    const [lastLiteCoinValue, setlastLiteCoinValue] = useState();

    var date = new Date();
    /**/ 

    async function coinInfos(){

        const bitcoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`);
        const ethereumcoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`);
        const tethercoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd`);
        const litecoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd`);

        const bitcoinResponseJson = await bitcoinResponse.json();
        const lastBitCoinValueResponse = bitcoinResponseJson.bitcoin.usd;
        setlastBitCoinSale(lastBitCoinValueResponse);

        const ethereumcoinResponseJson = await ethereumcoinResponse.json();
        const ethereumcoinValueResponse = ethereumcoinResponseJson.ethereum.usd;
        setlastEthereumValue(ethereumcoinValueResponse);

        const tethercoinResponseJson = await tethercoinResponse.json();
        const tethercoinValueResponse = tethercoinResponseJson.tether.usd;
        setlastTetherValue(tethercoinValueResponse);

        const litecoinResponseJson = await litecoinResponse.json();
        const litecoinValueResponse = litecoinResponseJson.litecoin.usd;
        setlastLiteCoinValue(litecoinValueResponse);

    }

    function refresh(){
        coinInfos();
        alert('Valores atualizados');
    }

    useEffect(() => {
        coinInfos();
    });

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#B22222'barStyle={"light-content"} />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.logoName}>
                        <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={25} color={'#fff'} />
                        <Text style={styles.tittleScreen}>CoinCotation</Text>
                    </View>
                    <TouchableOpacity
                    style={styles.buttonNotify}
                    onPress={() => {
                        refresh()
                    }}
                    >
                        <Ionicons name={'refresh-outline'} style={styles.userIcon} size={25} color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.welcomeContent}>
                <Text style={styles.messageUser}>Hi, User.</Text>
                <Text style={styles.messageWelcome}>Welcome Back!</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.contentText}>
                    <Text style={styles.messageUser}>
                        Hello!
                    </Text>
                    <Text style={styles.messageWelcome}>
                        See cotation from coins.
                    </Text>
                </View>
                <View style={styles.imageCoin}>
                    <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={70} color={'#800000'} />
                </View>
            </View>
            <View style={styles.cardCoinsContainer}>
                <View style={styles.contentTextCoins}>
                    <Text style={styles.strongText}>Main Coins</Text>
                    <TouchableOpacity
                    >
                        <Text style={styles.seeAllButtonText}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coincontainer}>
                    <TouchableOpacity style={styles.cardCoin}>
                        <Text style={styles.dateToday}>
                            {date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}
                            .{date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()}
                            .{date.getFullYear()}
                        </Text>
                        <View style={styles.nameLogoCoin}>
                            <Ionicons name={'cash-outline'} size={30} color={'#fff'}/>
                            <Text style={styles.coinName}>Bitcoin</Text>
                        </View>
                        <Text style={styles.coinValue}>$ {lastBitCoinValue}.00</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardCoin}>
                        <Text style={styles.dateToday}>
                            {date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}
                            .{date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()}
                            .{date.getFullYear()}
                        </Text>
                        <View style={styles.nameLogoCoin}>
                            <Ionicons name={'cash-outline'} size={30} color={'#fff'}/>
                            <Text style={styles.coinName}>Ethereum</Text>
                        </View>
                        <Text style={styles.coinValue}>$ {lastEthereumValue}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.coincontainer}>
                    <TouchableOpacity style={styles.cardCoin}>
                        <Text style={styles.dateToday}>
                            {date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}
                            .{date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()}
                            .{date.getFullYear()}
                        </Text>
                        <View style={styles.nameLogoCoin}>
                            <Ionicons name={'cash-outline'} size={30} color={'#fff'}/>
                            <Text style={styles.coinName}>Tether</Text>
                        </View>
                        <Text style={styles.coinValue}>$ {lastTetherValue}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardCoin}>
                        <Text style={styles.dateToday}>
                            {date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}
                            .{date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth()}
                            .{date.getFullYear()}
                        </Text>
                        <View style={styles.nameLogoCoin}>
                            <Ionicons name={'cash-outline'} size={30} color={'#fff'}/>
                            <Text style={styles.coinName}>LiteCoin</Text>
                        </View>
                        <Text style={styles.coinValue}>$ {lastLiteCoinValue}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};