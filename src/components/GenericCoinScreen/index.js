import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

export default function GenericCoinScreen({ navigation }){

    const [lastCoinValue, setlastCoinSale] = useState();
    const [lastMarketCap, setLastMarketCap] = useState();

    var date = new Date();
    var month = date.getMonth() + 1;
    /**/ 

    async function coinInfos(){

        const coinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`);
        const coinResponseJson = await coinResponse.json();
        const lastCoinValueResponse = coinResponseJson.bitcoin.usd;
        setlastCoinSale(lastCoinValueResponse);

/*        const bitcoinHistoyResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2017`);
        const bitcoinHistoyResponseJson = bitcoinHistoyResponse.json();
        const bitcoinHistoyValueResponse = bitcoinHistoyResponseJson.id;
        console.log(bitcoinHistoyValueResponse.json());*/

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
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreenStack')}
                    >
                        <Ionicons name={'close-outline'} style={styles.closeIcon} size={40} color={'#ffffff'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {refresh()}}
                    >
                        <Ionicons name={'refresh-outline'} style={styles.closeIcon} size={25} color={'#ffffff'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.basicInfos}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameCoinHeader}>
                            Coin Name
                        </Text>
                        <Text style={styles.disclaimer}>
                            Last Cotation Hour
                        </Text>
                    </View>
                    <View style={styles.dateHourContent}>
                        <Text style={styles.hour}>
                            18:33
                        </Text>
                        <Text style={styles.date}>
                            24/08/2002
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.mainContentet}>
                <View style={styles.moneyIcon}>
                    <Ionicons name={'cash-outline'}  size={100} color={'#B22222'} />
                </View>
                
               <View style={styles.cardInfo}>
                    <Text style={styles.typeInfo}>
                        Cotation
                    </Text>
                    <Text style={styles.valueCoin}>
                        $ {lastCoinValue}.00
                    </Text>
               </View>
            </View>
        </View>
    )
}