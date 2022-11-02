import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292828",
    flex: 1,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderBottomLeftRadius: 50,
  },
  headerContent: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderBottomLeftRadius: 100,
    paddingTop: 20,
  },
  logoName: {
    flexDirection: "column",
  },
  secondName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#292828",
    paddingLeft: 110,
    paddingBottom: 9,
  },
  title: {
    color: "#B22222",
    fontSize: 30,
    fontWeight: "bold",
  },
  messageWelcome: {
    color: "#FFA500",
    fontWeight: "bold",
    fontSize: 18,
  },
  cardBackground: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  card: {
    backgroundColor: "#292828",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 25,
  },
  contentText: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  cardCoinsContainer: {
    paddingTop: 60,
    flexDirection: "column",
    marginRight: 10,
    marginLeft: 10,
  },
  contentTextCoins: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    alignItems: "center",
  },
  strongText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
    fontStyle: "italic",
    paddingBottom: 10
  },
  seeAllButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    marginRight: 10,
    height: 30
  },
  cardCoinTop: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    height: "auto",
    margin: 10,
    borderRadius: 999,
    flexDirection: "column"
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerBottom: {
    flexDirection: "row",
  },
  coinName: {
    fontSize: 17,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 5,
  },
  messageWelcome2USer: {
    color: "#ffffff",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
  },
  btnSeeMore: {
    backgroundColor: "transparent",
    borderColor: "#FFFFFF",
    borderWidth: 3,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 3
  },
  contentBtnSeeMore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coinLogo:{
    width: 75,
    height: 75
  },
  cardCoinName:{
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
