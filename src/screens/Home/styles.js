import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    minHeight: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  FlatListContainer: {
    marginTop: 10,
    minHeight: 40,
    maxHeight: 40,
    marginBottom: 20,
  },
  item: {
    padding: 5,
    marginRight: 10,
  },
  title: {
    color: "#cbcbcb",
    fontSize: 20,
    fontWeight: "bold",
  },
  highlighedWrapperTitle: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#EDEAEE",
    borderRadius: 20,
  },
  highlighedTitle: {
    color: "#9C3BE3",
  },
});

export default styles;
