import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c2c2c",
    flex: 1,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderBottomLeftRadius: 50,
  },
  headerContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderBottomLeftRadius: 150,
    paddingTop: 30,
  },
  logoName: {
    flexDirection: "column",
  },
  title: {
    color: "#B22222",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 15
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
    justifyContent: "center",
    width: "100%",
    alignItems: "center"
  },
  contentTextCoins: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    alignItems: "center",
  },
  strongText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFFFFF",
    marginBottom: 40,
    textTransform: "uppercase"
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
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#850505",
    height: "auto",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 10
  },
  coinContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15
  },
  coinName: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  coinNameEthereum:{
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  messageWelcome2USer: {
    color: "#ffffff",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
  },
  contentSeeMore: {
    backgroundColor: "transparent",
    borderColor: "#FFFFFF",
    borderBottomWidth: 3,
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 3,
    width: "90%",
    marginTop: 25,
    marginBottom: 10
  },
  contentBtnSeeMore: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coinLogo:{
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 999
  },
  cardCoinName:{
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;