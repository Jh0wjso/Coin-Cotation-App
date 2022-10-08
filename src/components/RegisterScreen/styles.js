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
        marginTop: 35,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContent:{
        flexDirection: "row",
        alignItems: "center",
        padding: 6,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10
    },
    input:{
        width: "70%",
        height: 40,
        marginLeft: 15
    },
    registerButton:{
        backgroundColor: "gray",
        borderWidth: 2,
        borderColor: "gray",
        width: 200,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    registerText:{
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
        color: "#FFFFFF"
    }
});

export default styles;