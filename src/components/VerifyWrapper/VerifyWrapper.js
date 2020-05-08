import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const VerifyWrapper = ({
  phoneNo,
  handlePhoneNo,
  isVerification,
  handleVerify,
}) => {
  return (
    <>
      {isVerification ? (
        <OTPInputView
          style={styles.otpWrapper}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged={(code) => {
          //   this.setState({ code });
          // }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      ) : (
        <View style={[styles.inputContainer, styles.phoneNoWrapper]}>
          <TextInput
            style={styles.textbox}
            underlineColorAndroid="transparent"
            placeholder="Your phone number"
            onChangeText={(number) => handlePhoneNo(number)}
            value={phoneNo}
          />
        </View>
      )}
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.button}
          underlayColor="#fff"
          onPress={handleVerify}
        >
          <Text style={styles.verifyText}>
            {isVerification ? "Verify! 😀" : "Get Verification Code 😎"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

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

export default VerifyWrapper;
