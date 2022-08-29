import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d1d0d0',
        flex: 1,
        flexDirection: "column"
    },
    header:{
        width: '100%',
        padding: 10,
        backgroundColor: "#B22222"
    },
    headerContent:{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    basicInfos:{
        justifyContent: "center",
    },
    nameContainer:{
        alignItems: "center",
    },
    nameCoinHeader:{
        fontSize: 28,
        fontWeight: "500",
        fontStyle: "italic",
        color: "#ffffff"
    },
    dateHourContent:{
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 10
    },
    disclaimer:{
        color: "#ffffff",
        fontStyle: "italic"
    },
    hour:{
        color: "#ffffff",
        fontWeight: "bold",
    },
    date:{

        color: "#ffffff",
        fontWeight: "bold"
    },
    imageCoin:{
        width: 150,
        height: 150
    },
    mainContentet:{
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
        paddingTop: 60,
    },
    coinNameContent:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 5
    },
    cardInfo:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
        marginTop: 10,
        paddingTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderColor: '#55555577'
    },
    typeInfo:{
        fontWeight: "bold",
        fontSize: 17,
        padding: 10,
        color: "gray",
        justifyContent: "center"
    },
    valueCoin:{
        fontWeight: "bold",
        fontSize: 18,
        color: "#383737",
        justifyContent: "center"
    },
    coinName:{
        fontSize: 30
    },
    initialsCoin:{
        fontSize: 15,
        color: "#383737",
        fontWeight: "300"
    },
    cardInfoLast:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
        marginTop: 10
    },
    helpContent:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;