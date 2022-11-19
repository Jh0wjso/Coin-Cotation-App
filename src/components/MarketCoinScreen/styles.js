import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    backgroundColor: "#FFFFFF"
  },
  contentText: {
    justifyContent: "center",
    padding: 8,
  },
  messageWelcome2USer: {
    color: "#B22",
    fontWeight: "700",
    fontSize: 17,
    textTransform: "capitalize",
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
  logoMarket: {
    width: 55,
    height: 55,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#292929",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 999,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#940808",
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    padding: 5
  },
  buttonClose: {
    backgroundColor: "#940808",
    width: 100,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
    fontSize: 15
  },
  disclaimerButton: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15
  }
});

export default styles;
