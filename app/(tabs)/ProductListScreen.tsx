import { router } from "expo-router";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

type Product = {
  id: string;
  name: string;
  name2: string;
  price: string;
  image: any;
  maker: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Replica Eero",
    name2: "Aarnio Ball Chair",
    price: "€800.26",
    image: require("@/assets/images/chair1.png"),
    maker: "shina",
  },
  {
    id: "2",
    name: "Morden Setting",
    name2: "Chair",
    price: "€760.26",
    image: require("@/assets/images/welcomechair.png"),
    maker: "shina",
  },
  {
    id: "3",
    name: "Ksenia Chair",
    name2: " ",
    price: "€400.22",
    image: require("@/assets/images/chair2.png"),
    maker: "shina",
  },
];

const App = () => {
  const onPressDetails = () => {
    router.navigate("/ProductDetailsScreen");
  };

  return (
      <FlatList  style={styles.container}
        data={products}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            <View style={styles.header}>
              <Text style={styles.greeting}>Good Morning!</Text>
              <View>
                <Ionicons name={"search"} color={"black"} size={23} />
              </View>
              <Image
                style={styles.profileImage}
                source={require("@/assets/images/mainpic.png")}
              />
            </View>
            <View style={styles.searchContainer}>
              <Ionicons name={"search"} color={"black"} size={23}  style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for furniture"
              />
              <Ionicons name={"filter"} color={"black"} size={23}  style={styles.searchIcon} />
            </View>

            <ScrollView horizontal={true} style={styles.categoryMenu}>
              {["All", "Tables", "Chairs", "Sofa", "Beds", "Wardrobe"].map(
                (category, index) => (
                  <TouchableOpacity key={index} style={styles.categoryItem}>
                    <Text style={styles.categoryText}>{category}</Text>
                  </TouchableOpacity>
                )
              )}
            </ScrollView>
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={onPressDetails}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.productImage} />
              <Ionicons name={"heart"} color={"white"} size={23} style={styles.like} />
              <Ionicons name={"bag"} color={"white"} size={23} style={styles.cart} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productName2}>{item.name2}</Text>
              <Text style={styles.maker}>by {item.maker}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  greeting: {
    fontSize: 32,
    fontWeight: "bold",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1', // Adjust the background color
    borderRadius: 25, // Rounded corners
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoryMenu: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  categoryItem: {
    marginRight: 16,
    paddingVertical: 8,
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    textAlign: 'center',
  },
  productContainer: {
    borderRadius: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: "100%",
    height: 250 ,
    marginBottom: 10,
    borderRadius: 30,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
    position: 'absolute',
    color: 'black', // Adjust color as needed
    top: '40%', // Adjust vertical positioning
    left: '5%', // Adjust horizontal positioning
    transform: "[{ translateX: -50% }, { translateY: -50% }]", // Center the text
  },
  productName2: {
    fontSize: 22,
    fontWeight: "bold",
    position: 'absolute',
    color: 'black', // Adjust color as needed
    top: '50%', // Adjust vertical positioning
    left: '5%', // Adjust horizontal positioning
    transform: "[{ translateX: -50% }, { translateY: -50% }]", // Center the text
  },
  maker: {
    fontSize: 16,
    position: 'absolute',
    color: 'black', // Adjust color as needed
    top: '60%', // Adjust vertical positioning
    left: '5%', // Adjust horizontal positioning
    transform: "[{ translateX: -50% }, { translateY: -50% }]", // Center the text
  },
  productPrice: {
    fontSize: 16,
    color: "white",
    position: 'absolute',
    top: '75%', // Adjust vertical positioning
    left: '5%', // Adjust horizontal positioning
    transform: "[{ translateX: -50% }, { translateY: -50% }]", // Center the text
    backgroundColor: 'black',
    paddingVertical: 5, // Adjust vertical padding
    paddingHorizontal: 15, // Adjust horizontal padding
    borderRadius: 20,
  },
  like: {
    position: 'absolute',
    top: '10%', // Adjust vertical positioning
    left: '85%', // Adjust horizontal positioning
    transform: "[{ translateX: -50% }, { translateY: -50% }]", // Center the text
    backgroundColor: 'rgba(44, 40, 40, 0.22)',
    borderRadius: 40,
    paddingVertical: 10, // Adjust vertical padding
    paddingHorizontal: 10, // Adjust horizontal padding
  },
  cart: {
    position: 'absolute',
    top: '75%', // Adjust vertical positioning
    left: '85%', // Adjust horizontal positioning
    transform: "[{ translateX: -50% }, { translateY: -50% }]", // Center the text
    backgroundColor: 'rgba(44, 40, 40, 0.22)',
    borderRadius: 40,
    paddingVertical: 10, // Adjust vertical padding
    paddingHorizontal: 10, // Adjust horizontal padding
  },
});

export default App;
