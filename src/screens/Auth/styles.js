import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 200,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: "#8312c9",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  textbox: {
    height: 45,
    borderBottomColor: "#FFFFFF",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  signupText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
  helpText: {
    marginTop: 110,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
});
export default styles;
