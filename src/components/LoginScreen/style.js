import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#B22222",
        alignItems: "center",
        flexDirection: "column"
    },
    header:{
        borderColor: "#FFFFFFba",
        borderWidth: 1,
        padding: 30,
        borderRadius: 150,
    },
    headerBackground:{
        marginBottom: 40,
        borderColor: "#FFFFFF6b",
        borderWidth: 1,
        padding: 40,
        borderRadius: 150
    },
    logoTextTest:{
        fontSize: 100,
        fontWeight: "bold",
        color: "#FFA500",
        fontStyle: "italic",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        padding: 35,
        borderRadius: 150,
        paddingTop: 0,
        paddingBottom: 0
    },
    mainContainer:{
        flexDirection: "column",
        marginTop: 15
    },
    inputContent:{
        flexDirection: "row",
        borderBottomWidth: 1,
        alignItems: "center",
        borderColor: "#FFFFFF",
        marginBottom: 30
    },
    inputUsername:{
        width: "75%",
        marginLeft: 10,
        height: 50,
        fontWeight: "bold",
        fontSize: 18,
        color: "#FFFFFF"
    },
    buttonLogin:{
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContent:{
        backgroundColor: "#FFA500",
        borderWidth: 2,
        borderColor: "#FFFFFF",
        width: "90%",
        padding: 10,
        borderRadius: 20,
        alignItems: "center"
    },
    textLogin:{
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    registerButton:{
        alignItems: "center",
        padding: 20
    },
    registerText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default styles;