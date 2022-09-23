import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: "column"
    },
    headerBackground:{
        width: "100%",
        backgroundColor: "#B22222"
    },
    header:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderBottomRightRadius: 70,
        paddingRight: 10
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
        justifyContent: "center",
        backgroundColor: "#B22222",
        borderTopLeftRadius: 70
    },
    card:{
        borderColor: '#FFFFFF',
        borderBottomWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        margin: 5,
        marginRight: 20,
        marginLeft: 20
    },
    contentText:{
        justifyContent: "center",
        padding: 8
    },
    messageWelcome2USer:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
    
      iOSBackdrop: {
        backgroundColor: "#000000",
        opacity: 0.3
      },
      androidBackdrop: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      teste:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        opacity: 0.32,
        height: 150,
        width: 50
      }
});

export default styles;