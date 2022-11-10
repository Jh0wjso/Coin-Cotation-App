import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  headerContent: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 30,
    borderBottomLeftRadius: 50
  },
  header: {
    backgroundColor: "#292828",
    width: "100%",
  },
  logoName: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  tittleScreen: {
    color: "#B22222",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 15
  },
  inputContainer: {
    backgroundColor: "#292828",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center"
  },
  inputContent: {
    flexDirection: "row", 
    alignItems: "center",
    width: "100%",
  },
  searchButton: {
    backgroundColor: "#B22222",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
  },
  suggestions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: "center",
    width: "85%",
  },
  coinContent:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 999
  },
  errorMessage: {
    fontWeight: "bold",
    color: "#e9dede",
    fontSize: 18
  },
  quickAcess:{
    paddingBottom: 25,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22
  },
  contentButton:{
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  textCoinName:{
    color: "#fff",
    fontWeight: "bold"
  }
});

export default styles;
