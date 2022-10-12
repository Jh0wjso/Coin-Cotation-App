import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B22222",
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
    color: "#f29407",
    fontStyle: "italic",
    paddingLeft: 110,
    paddingBottom: 9,
  },
  title: {
    color: "#B22222",
    fontSize: 30,
    fontWeight: "bold",
  }
});

export default styles;