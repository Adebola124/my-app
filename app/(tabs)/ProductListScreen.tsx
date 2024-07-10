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
  price: string;
  image: any;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Replica Eero Aarnio Ball Chair",
    price: "€800.26",
    image: require("@/assets/images/chair1.png"),
  },
  {
    id: "2",
    name: "Morden Setting Chair",
    price: "€760.26",
    image: require("@/assets/images/welcomechair.png"),
  },
  {
    id: "3",
    name: "Ksenia Chair",
    price: "€400.22",
    image: require("@/assets/images/chair2.png"),
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
              <TextInput
                style={styles.searchInput}
                placeholder="Search for furniture"
              />
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
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
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
    fontSize: 24,
    fontWeight: "bold",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    paddingLeft: 16,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  categoryMenu: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  categoryItem: {
    marginRight: 16,
    paddingVertical: 8,
    backgroundColor: '#007BFF',
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
  },
  productImage: {
    width: "100%",
    height: 150 ,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
});

export default App;
