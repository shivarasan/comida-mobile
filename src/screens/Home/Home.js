import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import FoodList from "../../components/FoodList/FoodList";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basfasgfsdfg",
    title: "New",
  },
  {
    id: "bd7acsdfbea-c1b1-46c2-aed5-3asdfasdfdfsd53abb28basdfds",
    title: "Combo",
  },
  {
    id: "bdsdfs7acbea-c1b1-46c2-aed5-3ad53abb28bsdf",
    title: "Burritos",
  },
  {
    id: "bd7acbsdfea-c1b1-46c2-aed5-3ad53abb28bads",
    title: "Rice",
  },
  {
    id: "bd7acbsdfsdea-c1b1-46c2-aed5-3ad53abb28basdfsd",
    title: "Pizza",
  },
];
function Item({ title, seletedTitle, handleSelection }) {
  return (
    <View
      style={[
        styles.item,
        seletedTitle === title && styles.highlighedWrapperTitle,
      ]}
    >
      <Text
        style={[styles.title, seletedTitle === title && styles.highlighedTitle]}
        onPress={() => handleSelection(title)}
      >
        {title}
      </Text>
    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  const [seletedTitle, setSelectedTitle] = useState(null);
  return (
    <View style={styles.container}>
      <View elevation={5} style={styles.headerContainer}>
        <HomeHeader navigation={navigation} />
        <SafeAreaView style={styles.FlatListContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => (
              <Item
                title={item.title}
                handleSelection={(selectedTitle) =>
                  setSelectedTitle(selectedTitle)
                }
                seletedTitle={seletedTitle}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FoodList />
        <FoodList />
        <FoodList />
        <FoodList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
