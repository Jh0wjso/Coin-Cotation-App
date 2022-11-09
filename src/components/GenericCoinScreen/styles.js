import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B22222",
    flex: 1,
    flexDirection: "column",
  },
  headerBackground: {
    backgroundColor: "#292828",
  },
  header: {
    width: "100%",
    paddingTop: 30,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderBottomStartRadius: 20,
  },
  headerContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  basicInfos: {
    justifyContent: "center",
  },
  nameContainer: {
    alignItems: "center",
  },
  nameCoinHeader: {
    fontSize: 28,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#ffffff",
  },
  dateHourContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
  disclaimer: {
    color: "#ffffff",
    fontStyle: "italic",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  hour: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  date: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  imageCoin: {
    width: 150,
    height: 150,
  },
  mainContentet: {
    flex: 1,
    backgroundColor: "#292828",
    flexDirection: "column",
    justifyContent: "center"
  },
  coinNameContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
    paddingLeft: 25,
    paddingRight: 25,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 100,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#B22222",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10
  },
  nameContent:{
    flexDirection: "row",
    alignItems: "flex-end",
    width: "80%"
    },
  userIcon:{
    marginRight: 8
  },
  typeInfo: {
    fontWeight: "bold",
    fontSize: 17,
    padding: 0,
    color: "#B22222",
    justifyContent: "center"
  },
  valueCoin: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#B22222",
    justifyContent: "center",
  },
  coinName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    textTransform: "uppercase"
  },
  initialsCoin: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "bold",
    width: "20%",
    marginLeft: 10
  },
  cardInfoLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#B22222",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10
  },
  helpContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    alignItems: "center",
  },
  mainInfos:{
    padding: 5,
    borderRadius: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#434343",
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
    backgroundColor: "transparent",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  buttonClose: {
    backgroundColor: "#B22222",
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
    fontWeight: "300",
    color: "white"
  }
});

export default styles;
