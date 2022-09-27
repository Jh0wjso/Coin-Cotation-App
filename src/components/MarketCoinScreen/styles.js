import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B22222",
    flex: 1,
    flexDirection: "column",
  },
  headerBackground: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#B22222",
    width: "100%",
    borderBottomRightRadius: 70,
    paddingRight: 10,
  },
  headerContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
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
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 70,
  },
  card: {
    borderColor: "#B22222",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 50,
    backgroundColor: "#B22222"
  },
  contentText: {
    justifyContent: "center",
    padding: 8,
  },
  messageWelcome2USer: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontStyle: "italic",
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
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: "#FFFFFF"
  }
});

export default styles;
