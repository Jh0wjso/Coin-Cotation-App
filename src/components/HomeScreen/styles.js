import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#B22222',
        flex: 1,
        flexDirection: "column"
    },
    header:{
        backgroundColor: '#B22222',
        width: '100%',
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
    logoName:{
        flexDirection: 'row',
        alignItems: "center",
    },
    messageUser:{
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonNotify:{
        backgroundColor: '#B22222',
        padding: 5,
        borderRadius: 50
    },
    
    welcomeMessageContent:{
        justifyContent: "flex-start",
        marginBottom: 10,
        marginLeft: 20
    },
    messageWelcome:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    },
    userIcon:{
        fontWeight: "bold"
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
    coinIcon:{
        padding: 7,
        borderRadius: 10
    },
    
    cardCoinsContainer:{
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: '#ffffff',
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
        color: '#f7b365'
    },
    seeAllButtonText:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 20,
    },
    cardCoin:{
        padding: 10,
        backgroundColor: '#ffffff',
        height: 'auto',
        width: '40%',
        margin: 10,
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardCoinTop:{
        padding: 10,
        backgroundColor: '#ffffff',
        height: 'auto',
        width: '50%',
        margin: 10,
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',
    },
    coincontainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    containerBottom:{
        flexDirection: "row",
    },
    dateToday:{
        fontWeight: 'bold',
        color: '#B22222',
        fontStyle: "italic",
        fontSize: 13
    },
    nameLogoCoin:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    coinName:{
        fontSize: 17,
        color: '#B22222',
        fontWeight: 'bold',
        marginLeft: 5
    },
    coinValue:{
        fontSize: 20,
        margin: 5,
        color: '#B22222',
        fontWeight: '600'
    },
    infoText:{
        fontStyle: 'italic',
        fontSize: 12,
        color: '#ffffff',
        marginBottom: 10,
        fontWeight: "600"
    },
    
    messageWelcome2USer:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 13
    },
    btnSeeMore:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#ffffff"
    },
    contentBtnSeeMore:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;