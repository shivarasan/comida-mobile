import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { recipes } from "../../data/dataArrays";
import { ScrollView } from "react-native-gesture-handler";
// screen sizing
const { width, height } = Dimensions.get("window");

const Card = () => {
  const renderCartItems = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.cardItem}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <View style={styles.itemDescription}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={{ flexDirection: "row", width: 180 }}>
            <Text style={{ fontSize: 15, color: "#cbcbcb" }}>
              Without pickled cucumbers, added tomatoes
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: 180,
              // textAlign: "center"
            }}
          >
            <TouchableOpacity underlayColor="#fff" style={styles.button}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  //   padding: 5,
                  color: "#9d10eb",
                }}
              >
                {" "}
                -
              </Text>
            </TouchableOpacity>
            <View
              style={{ padding: 4, textAlign: "center", height: 20, width: 20 }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                1
              </Text>
            </View>
            <TouchableOpacity underlayColor="#fff" style={styles.button}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  //   padding: 5,
                  color: "#9d10eb",
                }}
              >
                {" "}
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.price}> {item.price}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View style={styles.container}>
      <View
        elevation={5}
        style={{
          padding: 20,
          width: 400,
          backgroundColor: "white",
          borderBottomColor: "#cbcbcb",
          shadowColor: "#cbcbcb",
          shadowOpacity: 0.8,
          shadowRadius: 6,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Cart</Text>
      </View>
      <ScrollView>
        <View
          style={{
            borderBottomColor: "#fafafa",
            borderBottomWidth: 1,
          }}
        >
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={[recipes[1], recipes[2], recipes[3]]}
            renderItem={renderCartItems}
            keyExtractor={(item) => `${item.recipeId}`}
          />
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.subtotalWrapper}>
            <Text style={styles.title}> Subtotal</Text>
            <Text style={styles.price}> € 5.80</Text>
          </View>
          <View style={styles.subtotalWrapper}>
            <Text style={styles.title}> VAT</Text>
            <Text style={styles.price}> € 3.00</Text>
          </View>
          <View style={styles.subtotalWrapper}>
            <Text style={styles.titleTotal}> Total</Text>
            <Text style={styles.priceTotal}> € 8.80</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  priceContainer: {
    // flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomColor: "#fafafa",
    borderBottomWidth: 1,
  },
  subtotalWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cbcbcb",
  },
  titleTotal: {
    fontSize: 25,
    fontWeight: "bold",
  },
  priceTotal: {
    fontSize: 25,
    fontWeight: "bold",
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  cardItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  itemDescription: {
    // padding: 15,
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    // maxWidth: 50,
    // maxHeight: 50,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    padding: 1,
    backgroundColor: "#faf1ff",
    borderRadius: 5,
    borderColor: "#fff",
    opacity: 0.5,
    height: 20,
    width: 20,
  },
});

export default Card;
