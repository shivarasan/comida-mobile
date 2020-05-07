import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from "react-native";
// import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import { sqrt } from "react-native-reanimated";
// import styles from "./styles";

const FoodList = () => {
  //   const renderRecipes = ({ item }) => (
  //     <TouchableHighlight>
  //       <View style={styles.container}>
  //         <Image style={styles.photo} source={{ uri: item.photo_url }} />
  //         <Text style={styles.title}>{item.title}</Text>
  //       </View>
  //     </TouchableHighlight>
  //   );

  return (
    <View style={styles.container}>
      <Text style={styles.foodCategoryTitle}>New</Text>
      <View>
        <TouchableHighlight>
          <View style={styles.MainFoodContainer}>
            <View style={styles.mainPhotoWrapper}>
              <Image
                style={styles.mainPhoto}
                source={{ uri: recipes[0].photo_url }}
              />
              <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>€ 1.80</Text>
              </View>
            </View>

            <View style={styles.mainTitleWrapper}>
              <Text style={styles.mainTitle}>{recipes[0].title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
      {/* <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={[recipes[1], recipes[2]]}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEAEE",
    paddingLeft: 10,
    paddingRight: 10,
  },
  foodCategoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  MainFoodContainer: {
    flex: 1,
    flexDirection: "column",
  },
  mainPhotoWrapper: {
    position: "relative",
    width: 350,
    height: 100,
    overflow: "hidden",
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  mainPhoto: {
    position: "absolute",
    width: 350,
    height: 100,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  priceWrapper: {
    position: "absolute",
    right: -15,
    top: -10,
    padding: 10,
    width: 100,
    backgroundColor: "#9C3BE3",
    borderRadius: 20,
  },
  priceText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainTitle: {
    // flex: 1,
    padding: 10,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",

    // borderTopRightRadius: 0,
    // marginTop:
    // marginRight: 5,
    // marginLeft: 5,
  },
  mainTitleWrapper: {
    position: "relative",
    width: 350,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default FoodList;
