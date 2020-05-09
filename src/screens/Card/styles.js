import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  priceContainer: {
    // flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomColor: "#fafafa",
    borderBottomWidth: 1,
  },
  subtotalWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cbcbcb",
  },
  titleTotal: {
    fontSize: 25,
    fontWeight: "bold",
  },
  priceTotal: {
    fontSize: 25,
    fontWeight: "bold",
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  itemDescription: {
    // padding: 15,
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    // maxWidth: 50,
    // maxHeight: 50,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    padding: 1,
    backgroundColor: "#faf1ff",
    borderRadius: 5,
    borderColor: "#fff",
    opacity: 0.5,
    height: 20,
    width: 20,
  },
});

export default styles;
