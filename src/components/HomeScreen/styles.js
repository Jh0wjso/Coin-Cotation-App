import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "column"
    },
    tittleScreen:{
        color: '#fff',
        fontSize: 25,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    headerContent:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    header:{
        backgroundColor: '#B22222',
        width: '100%',
    },
    coinIcon:{
        padding: 7,
        borderRadius: 10
    },
    userIcon:{
        fontWeight: "bold"
    },
    logoName:{
        flexDirection: 'row',
        alignItems: "center",
    },
    messageUser:{
        color: '#800000',
        fontSize: 25,
        fontWeight: 'bold'
    },
    messageWelcome:{
        color: '#4F4F4F',
        fontWeight: 'bold',
        fontSize: 13
    },
    welcomeContent:{
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 10
    },
    card:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 25,
        marginLeft: 25,
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 5,
        paddingLeft: 10,
        borderColor: '#800000',
        height: 90
    },
    contentText:{
        justifyContent: "center",
        width: '50%',
    },
    buttonNotify:{
        backgroundColor: '#B22222',
        padding: 5,
        borderRadius: 50
    },
    cardCoinsContainer:{
        marginTop: 20,
        flexDirection: "column",
        marginRight: 10,
        marginLeft: 10,
    },
    contentTextCoins:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 0,
        alignItems: 'center'
    },
    strongText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#800000'
    },
    seeAllButtonText:{
        color: 'gray',
        fontWeight: 'bold'
    },
    cardCoin:{
        padding: 10,
        backgroundColor: '#800000',
        height: 'auto',
        width: '45%',
        margin: 10,
        borderRadius: 15,
    },
    coincontainer:{
        flexDirection: 'row'
    },
    dateToday:{
        fontWeight: 'bold',
        color: '#d1cdcd',
        fontSize: 13
    },
    nameLogoCoin:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        margin: 10
    },
    coinName:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: "italic"
    },
    coinValue:{
        fontSize: 20,
        margin: 5,
        color: '#fff',
        fontStyle: "italic",
        fontWeight: 'bold'
    },
    infoText:{
        fontStyle: 'italic',
        fontSize: 12,
        fontWeight: '600',
        color: 'gray'
    },
});

export default styles;