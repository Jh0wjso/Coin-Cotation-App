import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function HomeScreen({ navigation }){

    const [lastBitCoinValue, setlastBitCoinSale] = useState();
    const [lastEthereumValue, setlastEthereumValue] = useState();
    const [lastLiteCoinValue, setlastLiteCoinValue] = useState();

    let date = new Date();
    let month = date.getMonth() + 1;
    /**/

    function returnDate(){
        return <Text> {date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}
        /{date.getMonth() < 10 ? '0'+month : date.month}    
        /{date.getFullYear()} </Text>
    }

    async function coinInfos(){

        const bitcoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl`);
        const ethereumcoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl`);
        const litecoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=brl`);

        const bitcoinResponseJson = await bitcoinResponse.json();
        const lastBitCoinValueResponse = bitcoinResponseJson.bitcoin.brl;
        setlastBitCoinSale(lastBitCoinValueResponse);

        const ethereumcoinResponseJson = await ethereumcoinResponse.json();
        const ethereumcoinValueResponse = ethereumcoinResponseJson.ethereum.brl;
        setlastEthereumValue(ethereumcoinValueResponse);

        const litecoinResponseJson = await litecoinResponse.json();
        const litecoinValueResponse = litecoinResponseJson.litecoin.brl;
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
                    </View>

                    <Text style={styles.messageUser}>CoinCotation</Text>

                    <TouchableOpacity
                    style={styles.buttonNotify}
                    onPress={() => {
                        refresh()
                    }}
                    >
                        <Ionicons name={'refresh-outline'} style={styles.userIcon} size={25} color={'#fff'} />
                    </TouchableOpacity>
                </View>

                <View style={styles.welcomeMessageContent}>
                    <Text style={styles.messageWelcome}>Bem vindo de volta!</Text>   
                </View> 
            </View>
            <View style={styles.welcomeContent}>
            </View>
            <View style={styles.card}>
                <View style={styles.contentText}>
                    <Text style={styles.messageWelcome2USer}>
                        Veja informações da sua moeda preferida.
                    </Text>
                </View>
                <View style={styles.imageCoin}>
                    <Ionicons name={'logo-bitcoin'} style={styles.coinIcon} size={70} color={'#800000'} />
                </View>
            </View>
            <View style={styles.cardCoinsContainer}>
                <View style={styles.contentTextCoins}>
                    <Text style={styles.strongText}>Mais Prcuradas</Text>
                    <TouchableOpacity
                    >
                        <Text style={styles.seeAllButtonText}>
                            Ver Todas
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.infoText}>Aperte no card para mais informações.</Text>
                <View style={styles.coincontainer}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('GenericCoinScreen',
                            {
                                domainName: 'BTC',
                                name: 'bitcoin'
                            }
                        )}
                        style={styles.cardCoin}
                    >
                        <View>
                            <Text style={styles.dateToday}>
                                {returnDate()}
                            </Text>
                            <View style={styles.nameLogoCoin}>
                                <Ionicons name={'cash-outline'} size={30} color={'#fff'}/>
                                <Text style={styles.coinName}>Bitcoin</Text>
                            </View>
                        </View>
                        <Text style={styles.coinValue}>R$ {parseFloat(lastBitCoinValue).toFixed(2).replace('.', ',')}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('GenericCoinScreen',
                        {
                            domainName: 'ETH',
                            name: 'ethereum'
                        }
                        )}
                        style={styles.cardCoin}
                    >
                        <View>
                            <Text style={styles.dateToday}>
                                {returnDate()}
                            </Text>
                            <View style={styles.nameLogoCoin}>
                                <Ionicons name={'cash-outline'} size={30} color={'#fff'}/>
                                <Text style={styles.coinName}>Ethereum</Text>
                            </View>
                        </View>
                        <Text style={styles.coinValue}>R$ {parseFloat(lastEthereumValue).toFixed(2).replace('.', ',')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('GenericCoinScreen',
                        {
                            domainName: 'LTC',
                            name: 'liteCoin'
                        }
                        )}
                        style={styles.cardCoin}
                    >
                        <View>
                            <Text style={styles.dateToday}>
                                {returnDate()}
                            </Text>
                            <View style={styles.nameLogoCoin}>
                                <Ionicons name={'cash-outline'} size={30} color={'#fff'}/>
                                <Text style={styles.coinName}>LiteCoin</Text>
                            </View>
                        </View>
                        <Text style={styles.coinValue}>R$ {parseFloat(lastLiteCoinValue).toFixed(2).replace('.', ',')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}