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
    paddingTop: 20,
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
  },
  strongText: {
    fontWeight: "800",
    fontSize: 20,
    color: "#292828",
    paddingLeft: 60,
    paddingBottom: 9,
  },
  inputContainer: {
    backgroundColor: "#292828",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputContent: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    padding: 50
  },
  searchButton: {
    backgroundColor: "#B22222",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
  },
  suggestions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
    alignItems: "center",
    width: "90%",
  },
  coinContent:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 999
  },
  errorMessage: {
    paddingBottom: 15,
    fontWeight: "bold",
    color: "#e9dede",
    fontSize: 18
  },
  quickAcess:{
    paddingBottom: 25,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 22
  }
});

export default styles;
