import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "column",
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
    logoName:{
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    coinMessage:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5

    },
    tittleScreen:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    strongText:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#f29407",
        fontStyle: 'italic'
    },
    inputContainer:{
        flexDirection: 'column',
        backgroundColor: '#B22222',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContent:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        width:"80%",
        
    },
    input:{
        backgroundColor:"#f6f6f6",
        height: 40,
        paddingLeft:10,
        justifyContent: 'flex-start',
        flexDirection: "row",
    },
    searchButton:{
        backgroundColor: '#f6f6f6',
        height: 41,
        alignItems: "center",
        justifyContent: "center",
        width: '15%',
    },
    suggestions:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 12,
        alignItems: 'center',
        width: '70%'
    },
    textSuggestion:{
        backgroundColor: '#f29407',
        padding: 5,
        fontSize: 15,
        borderRadius: 5,
        fontWeight: 'bold',
        color: '#fff'
    },
    disclaimerContariner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    disclaimerText:{
        fontStyle: 'italic',
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
    }
});

export default styles;