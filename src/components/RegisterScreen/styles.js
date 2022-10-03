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
    }
});

export default styles;