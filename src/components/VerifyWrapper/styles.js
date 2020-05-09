import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    marginTop: 10,
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
  verifyText: {
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
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#fff",
  },
  otpWrapper: {
    flex: 1,
    width: 325,
    height: 10,
    maxHeight: 100,
    // marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 60,
  },

  underlineStyleBase: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#fff",
    width: 70,
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.84,
    elevation: 5,
  },

  underlineStyleHighLighted: {
    borderColor: "#fff",
  },
  phoneNoWrapper: {
    marginTop: 80,
  },
});
export default styles;
