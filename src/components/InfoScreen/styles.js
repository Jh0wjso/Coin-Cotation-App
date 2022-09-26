import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "column",
  },
  header: {
    width: 100,
    padding: 15,
    backgroundColor: "#ffffff",
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    padding: 15,
  },
  infoContent: {
    flexDirection: "column",
    alignItems: "center",
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    borderColor: "#55555577",
  },
  infoName: {
    fontSize: 27,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "500",
    color: "#B22250",
  },
  infomation: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    fontWeight: "500",
  },
  lastInfoContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  infomationText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default styles;
