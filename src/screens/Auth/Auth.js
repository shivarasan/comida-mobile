import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import VerifyWrapper from "../../components/VerifyWrapper/VerifyWrapper";
import styles from "./styles";

const AuthScreen = ({ navigation }) => {
  const [isVerification, setIsVerification] = useState(false);
  const [phoneNo, setPhoneNo] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Comida 5G</Text>
      <VerifyWrapper
        phoneNo={phoneNo}
        handlePhoneNo={(number) => setPhoneNo(number)}
        isVerification={isVerification}
        handleVerify={() => {
          !isVerification
            ? setIsVerification(true)
            : navigation.navigate("Home");
        }}
      />
      {isVerification ? (
        <Text>Get new code in 27 seconds</Text>
      ) : (
        <>
          <Text style={styles.signupText}>I'll sign up later</Text>
          <Text style={styles.helpText}>Need help?</Text>
        </>
      )}
    </View>
  );
};

export default AuthScreen;
