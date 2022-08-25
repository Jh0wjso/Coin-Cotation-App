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
        fontWeight: "bold"
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
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 25,
    },
    cardInfo:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    moneyIcon:{
        alignItems: "center",
        marginBottom: 35
    },
    typeInfo:{
        fontWeight: "bold",
        fontSize: 25,
        fontStyle: "italic",
        color: "#383737",
        justifyContent: "center"
    },
    valueCoin:{
        fontWeight: "bold",
        fontSize: 25,
        fontStyle: "italic",
        color: "#383737",
        justifyContent: "center"
    }
});

export default styles;