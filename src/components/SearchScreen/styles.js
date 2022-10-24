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
    borderBottomLeftRadius: 75,
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#B22222",
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
    fontWeight: "bold",
    fontSize: 20,
    color: "#f29407",
    fontStyle: "italic",
    paddingLeft: 60,
    paddingBottom: 9,
  },
  inputContainer: {
    borderTopRightRadius: 75,
    backgroundColor: "#B22222",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContent: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
    width: "115%",
    paddingRight: 30,
  },
  searchButton: {
    backgroundColor: "#f29407",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
  },
  suggestions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
    alignItems: "center",
    width: "80%",
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
});

export default styles;
