import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";


export default function GenericCoinScreen({ navigation }){

    const [lastBitCoinValue, setlastBitCoinSale] = useState();

    var date = new Date();
    var month = date.getMonth() + 1;
    /**/ 

    async function coinInfos(){

        const bitcoinResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`);
        const bitcoinResponseJson = await bitcoinResponse.json();
        const lastBitCoinValueResponse = bitcoinResponseJson.bitcoin.usd;
        setlastBitCoinSale(lastBitCoinValueResponse);

        const bitcoinHistoyResponse = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=25-08-2020`);
        const bitcoinHistoyResponseJson = bitcoinHistoyResponse.json();
        const bitcoinHistoyValueResponse = bitcoinHistoyResponseJson.id;
        console.log(bitcoinHistoyValueResponse.json());


    }

    function refresh(){
        coinInfos();
        alert('Valores atualizados');
    }

    useEffect(() => {
        coinInfos();
    });

    console.log(lastBitCoinValue);

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#B22222'barStyle={"light-content"} />
            <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}
                    >
                        <Ionicons name={'close-outline'} style={styles.closeIcon} size={40} color={'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <Ionicons name={'refresh-outline'} style={styles.closeIcon} size={25} color={'gray'} />
                    </TouchableOpacity>
            </View>
        </View>
    )
}