import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: "column"
    },
    header:{
        paddingLeft: 15,
        paddingRight: 15
    },
    headerContent: {
        alignItems: "center",
        flexDirection: "row",
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    nameScreen: {
        color: "#575555",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 15
    },
    disclaimerContent:{
        margin: 15
    },
    disclaimerText:{
        color: "#656464",
        fontStyle: "italic",
        fontSize: 13
    },
    form:{
        flexDirection: "column",
        marginTop: 35
    },
    inputContent:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
        padding: 6,
        borderWidth: 1,
        borderRadius: 20
    },
    input:{
        width: "70%",
        height: 40,
        marginLeft: 15
    }
});

export default styles;