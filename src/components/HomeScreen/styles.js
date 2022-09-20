import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#B22222',
        flex: 1,
        flexDirection: "column"
    },
    header:{
        backgroundColor: '#ffffff',
        width: '100%',
        borderBottomLeftRadius: 50
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
        color: '#B22222',
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonNotify:{
        backgroundColor: '#B22222',
        padding: 5,
        borderRadius: 50
    },
    
    welcomeMessageContent:{
        display: "none",
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingRight: 25
    },
    messageWelcome:{
        color: '#FFA500',
        fontWeight: 'bold',
        fontSize: 18
    },
    userIcon:{
        fontWeight: "bold"
    },
    cardBackground:{
        width: '100%',
        backgroundColor: '#ffffff'
    },
    card:{
        backgroundColor: '#B22222',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopRightRadius: 75,
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 25
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
        color: '#FFA500'
    },
    seeAllButtonText:{
        color: '#FFA500',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 20,
        marginRight: 10
    },
    cardCoin:{
        padding: 10,
        backgroundColor: '#FFA500',
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
        backgroundColor: '#FFA500',
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
        color: '#FFFFFF',
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
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 5
    },
    coinValue:{
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    infoText:{
        display: "none",
        fontStyle: 'italic',
        fontSize: 12,
        color: '#B22222',
        marginBottom: 10,
        fontWeight: "bold"
    },
    
    messageWelcome2USer:{
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 13
    },
    btnSeeMore:{
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    contentBtnSeeMore:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;