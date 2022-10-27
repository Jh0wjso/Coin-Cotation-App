import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B22222",
    flex: 1,
    flexDirection: "column",
  },
  headerBackground: {
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    padding: 15,
    backgroundColor: "#B22222",
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
    backgroundColor: "#ffffff",
    flexDirection: "column",
    justifyContent: "center"
  },
  coinNameContent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: "#FFA500",
    backgroundColor: "#FFFFFF",
    borderRadius: 5
  },
  nameContent:{
    flexDirection: "row",
    alignItems: "center"
  },
  userIcon:{
    marginRight: 8
  },
  typeInfo: {
    fontWeight: "bold",
    fontSize: 17,
    padding: 0,
    color: "#FFA500",
    justifyContent: "center"
  },
  valueCoin: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFA500",
    justifyContent: "center",
  },
  coinName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFA500",
    textTransform: "uppercase"
  },
  initialsCoin: {
    fontSize: 15,
    color: "#FFA500",
    fontWeight: "bold",
  },
  cardInfoLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    borderBottomWidth: 2,
    borderColor: "#FFA500",
    backgroundColor: "#FFFFFF",
    borderRadius: 5
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
  }
});

export default styles;
