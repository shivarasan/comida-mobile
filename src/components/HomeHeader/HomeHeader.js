import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const HomeHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        maxHeight: 40,
      }}
    >
      <Text style={styles.title}>Hello, Viki!</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          style={{ maxHeight: 25, maxWidth: 25 }}
          source={require("../../assests/Images/shopping-card.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
