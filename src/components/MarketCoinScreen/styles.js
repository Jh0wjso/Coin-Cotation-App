import { StyleSheet } from "react-native"

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
    marketsContainer:{
        flex: 1,
        justifyContent: "center"
    },
    card:{
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        margin: 5,
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 10
    },
    contentText:{
        justifyContent: "center",
        padding: 8
    },
    messageWelcome2USer:{
        color: '#FFA500',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 20
    }
});

export default styles;