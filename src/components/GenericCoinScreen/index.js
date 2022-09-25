import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

export default function GenericCoinScreen({ navigation, route }){

    const [lastCoinSale, setlastCoinSale] = useState();
    const [highCoinSale, setHighCoinSale] = useState();
    const [last24Vol, setLast24Vol] = useState();
    const [openValue, setOpenValue] = useState();

    let date = new Date();
    let month = date.getMonth() + 1;

    function returnHour(){
        return <Text>
                {date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:
                {date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}:
                {date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}
            </Text>
    }

    function returnDate(){
        return <Text> {date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}
        /{date.getMonth() < 10 ? '0'+month : month}    
        /{date.getFullYear()} </Text>
    }

    async function coinInfos(){
        const mercadoBitCoinResonse = await fetch(`https://www.mercadobitcoin.net/api/${route.params.domainName}/ticker/`);
        const mercadoBitCoinResonseJson = await mercadoBitCoinResonse.json();

        const lastCoinValueResponse = mercadoBitCoinResonseJson.ticker.last;
        setlastCoinSale(lastCoinValueResponse);

        const lastMarketCapResponse = mercadoBitCoinResonseJson.ticker.high;
        setHighCoinSale(lastMarketCapResponse);

        const last24VolResponse = mercadoBitCoinResonseJson.ticker.vol;
        setLast24Vol(last24VolResponse);

        const last24ChangeResponse = mercadoBitCoinResonseJson.ticker.open;
        setOpenValue(last24ChangeResponse);
    }

    function refresh(){
        coinInfos();
        returnDate();
        returnHour();
        alert('Valores atualizados');
    }

    useEffect(() => {
        coinInfos();
    });

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#B22222'barStyle={"light-content"} />
            <View style={styles.headerBackground}>
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
                                Mais Informações
                            </Text>
                        </View>
                        <View style={styles.dateHourContent}>
                            <Text style={styles.hour}>
                                <Ionicons name={'alarm-outline'} style={styles.userIcon} size={15} color={'#fff'} />
                                {returnHour()}
                            </Text>
                            <Text style={styles.date}>
                                <Ionicons name={'calendar-outline'} style={styles.userIcon} size={15} color={'#fff'} />
                                {returnDate()}
                            </Text>
                        </View>
                        <View style={styles.infoText}>
                            <Text style={styles.disclaimer}>
                                Hora e data da cotação
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.mainContentet}>
                <View style={styles.coinNameContent}>
                    <Text style={styles.coinName}>
                        {route.params.name}
                    </Text>
                    <Text style={styles.initialsCoin}>
                        ({route.params.domainName})
                    </Text>
                </View>
                
               <View style={styles.cardInfo}>
                    <Text style={styles.typeInfo}>
                        Ultima Cotação
                    </Text>
                    <Text style={styles.valueCoin}>
                        R$ {parseFloat(lastCoinSale).toFixed(2).replace('.', ',')}
                        
                    </Text>
               </View>
               <View style={styles.cardInfo}>
                    <Text style={styles.typeInfo}>
                        Maior Venda/Hoje
                    </Text>
                    <Text style={styles.valueCoin}>
                        R$ {parseFloat(highCoinSale).toFixed(2).replace('.', ',')}
                    </Text>
               </View>
               <View style={styles.cardInfo}>
                    <Text style={styles.typeInfo}>
                        Valor Abertura
                    </Text>
                    <Text style={styles.valueCoin}>
                        R$ {parseFloat(openValue).toFixed(2).replace('.', ',')}
                    </Text>
               </View>
               <View style={styles.cardInfoLast}>
                    <Text style={styles.typeInfo}>
                        Volume
                    </Text>
                    <Text style={styles.valueCoin}>
                        {parseFloat(last24Vol).toFixed(2).replace('.', ',')}
                    </Text>
               </View>
               <TouchableOpacity 
                    style={styles.helpContent}
                    onPress = {() => navigation.navigate('InfoScreen')}
               >
                    <Ionicons name={'help-circle-outline'} style={styles.userIcon} size={40} color={'gray'} />
               </TouchableOpacity>
            </View>
        </View>
    )
}