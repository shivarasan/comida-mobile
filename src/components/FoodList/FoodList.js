import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
// import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import { sqrt } from "react-native-reanimated";
import styles from "./styles";

const FoodList = () => {
  const renderRecipes = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.subContainer}>
        <View>
          <View style={styles.photoWrapper}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <View style={styles.priceWrapper}>
              <Text style={styles.priceText}>€ 3.80</Text>
            </View>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.foodCategoryTitle}>New</Text>
      <View style={{ height: 150 }}>
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
      <View
        style={{
          flex: 1,
          width: 350,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={[recipes[1], recipes[2]]}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
    </View>
  );
};

export default FoodList;
