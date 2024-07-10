import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import Slider from 'react-native-slide-to-unlock';
//import products from '@/app/(tabs)/ProductListScreen';
import { Styles } from '@/utils/Styles';
import { ThemedView } from '@/components/ThemedView';

type Product = {
  id: string;
  name: string;
  price: string;
  image: any;
};

export const products: Product[] = [
  // {
  //   id: "1",
  //   name: "Replica Eero Aarnio Ball Chair",
  //   price: "€800.26",
  //   image: require("@/assets/images/chair1.png"),
  // },
  {
    id: "2",
    name: "Morden Setting Chair",
    price: "€760.26",
    image: require("@/assets/images/welcomechair.png"),
  },
];


const ProductListScreen = () => {
  return (
    <FlatList  style={Styles.PDScontainer}
      data={products}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <>
          <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
            source={require("@/assets/images/welcomechair.png")}
            style={Styles.PDSimgLogo}
            />
          }>
            <View style={Styles.PDScontainer}>
              <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ThemedView style={Styles.stepContainer}>
                    <Text style={Styles.PDSproductName}>{item.name}</Text>
                    <Text style={Styles.PDSproductPrice}>{item.price}</Text>
                    <Text>
                      "Indulge in the perfect balance of elegance and functionality with our meticulously crafted ergonomic chair.
                      Engineered to support your body with precision, it redefines comfort for long hours at your desk or in meetings.
                      The chair's ergonomic design promotes natural alignment, reducing strain on your spine and muscles while enhancing focus and productivity.
                      Adjustable lumbar support, height, and armrests ensure a personalized fit, adapting effortlessly to your unique preferences.
                      Whether you're crunching numbers, brainstorming ideas, or simply relaxing with a book, our chair offers unrivaled support and relaxation, enveloping you in plush comfort with every sit."
                    </Text>
                    <Text>
                      " Embrace sophistication in your workspace or living area with our chair's contemporary aesthetic and robust construction.
                      Upholstered in premium, breathable fabric that withstands daily wear, it seamlessly integrates into any decor, from modern offices to cozy home environments.
                      The sturdy base and smooth swivel mechanism provide stability and mobility, enhancing convenience and functionality.
                      Elevate your seating experience with a chair that not only enhances your posture and well-being but also complements your style, making it a timeless addition to your space.
                      Discover why comfort and design meet seamlessly in our ergonomic masterpiece."
                    </Text>
                  </ThemedView>
                )}
              />
              <Slider
                onEndReached={() => {
                  router.navigate('./(tabs)/ProductListScreen');
                } }
                containerStyle={Styles.sliderStyles}
                sliderElement={
                  <Ionicons name={"bag"} color={"black"} size={44} />
                }
                >
                <Text style={Styles.slide}>{'Add to cart'}</Text>
              </Slider>
            </View>
          </ParallaxScrollView>
        </>
      )}
    />
  );
};

export default ProductListScreen;
