import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
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
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const description = "Indulge in the perfect balance of elegance and functionality with our meticulously crafted ergonomic chair. Engineered to support your body with precision, it redefines comfort for long hours at your desk or in meetings. The chair's ergonomic design promotes natural alignment, reducing strain on your spine and muscles while enhancing focus and productivity. Adjustable lumbar support, height, and armrests ensure a personalized fit, adapting effortlessly to your unique preferences. Whether you're crunching numbers, brainstorming ideas, or simply relaxing with a book, our chair offers unrivaled support and relaxation, enveloping you in plush comfort with every sit.";

  return (
    <FlatList  style={Styles.PDScontainer}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
            <ScrollView>
              <View style={Styles.PDSimageContainer}>
                <Image source={require("@/assets/images/welcomechair.png")} style={Styles.PDSimage} />
              </View>
              <Ionicons name={"heart"} color={"white"} size={30} style={Styles.PDSlike} />
                <View style={Styles.PDScontainer}>
                  <ThemedView style={Styles.stepContainer}>
                    <Text style={Styles.PDSproductName}>{item.name}</Text>
                    <Text style={Styles.PDSproductPrice}>{item.price}</Text>
                  </ThemedView>
                  <Text style={Styles.description}>
                    {expanded ? description : `${description.substring(0, 150)}...`}
                  </Text>
                  <TouchableOpacity onPress={toggleExpanded}>
                    <Text style={Styles.seeMore}>{expanded ? 'See less' : 'See more...'}</Text>
                  </TouchableOpacity>
                </View>
                <Slider
                  onEndReached={() => {
                    router.navigate('./(tabs)/ProductListScreen');
                  }}
                  containerStyle={Styles.PDSsliderStyles}
                  sliderElement={
                    <Ionicons name={"home"} color={"bag"} size={30} style={Styles.PDSsliderIcon} />
                  }
                >
                    <Text>{'Add to cart'}</Text>
                </Slider>
            </ScrollView>
      )}
    />
    
  );
};

export default ProductListScreen;



{/* <Text style={Styles.description}>
{expanded ? description : `${description.substring(0, 150)}...`}
</Text>
<TouchableOpacity onPress={toggleExpanded}>
<Text style={Styles.seeMore}>{expanded ? 'See less' : 'See more...'}</Text>
</TouchableOpacity> */}