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
import styles from "./styles";

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

export default VerifyWrapper;
