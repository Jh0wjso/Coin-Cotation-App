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
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    messageWelcome:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: "italic",
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
        marginTop: 10,
        paddingLeft: 10,
        height: 90,
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
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
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
        width: '90%',
        margin: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    coincontainer:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    dateToday:{
        fontWeight: 'bold',
        color: '#d1cdcd',
        fontSize: 13
    },
    nameLogoCoin:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    coinName:{
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: "italic",
        marginLeft: 5
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
        color: 'gray'
    },
    welcomeMessageContent:{
        justifyContent: "flex-start",
        margin: 20,
        marginTop: 5
    },
    message2User:{
        color: '#800000',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: "italic"
    },
    messageWelcome2USer:{
        color: '#800000',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 13
    }
});

export default styles;