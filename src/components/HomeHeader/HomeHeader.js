import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HomeHeader = () => {
  return (
    <>
      <Text style={styles.title}>Hello, Viki!</Text>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default HomeHeader;
