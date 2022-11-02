import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B22222",
    flex: 1,
    flexDirection: "column"
  },
  headerBackground: {
    width: "100%",
    backgroundColor: "#292828",
  },
  header: {
    backgroundColor: "#B22222",
    width: "100%",
    paddingRight: 5,
  },
  headerContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  logoName: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageUser: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  marketsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#292828",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: "#FFF"
  },
  contentText: {
    justifyContent: "center",
    padding: 8,
  },
  messageWelcome2USer: {
    color: "#B22222",
    fontWeight: "bold",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  iOSBackdrop: {
    backgroundColor: "#B22222",
    opacity: 0.3,
  },
  androidBackdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  teste: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B22222",
    opacity: 0.32,
    height: 150,
    width: 50,
  },
  logoMarket:{
    width: 65,
    height: 65,
    borderRadius: 999,
    backgroundColor: "#FFFFFF"
  }
});

export default styles;
