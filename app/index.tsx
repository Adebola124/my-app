import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import { router } from 'expo-router';
import { Styles } from '@/utils/Styles';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';



const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <><ImageBackground
        source={require('@/assets/images/welcomechair.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Everything</Text> 
          <Text style={styles.title2}>your home</Text> 
          <Text style={styles.title}>deserves</Text>
          <Text style={styles.subtitle}>Total Furniture Solutions for Hotels, Apartments, Residences, and Commercial Office Spaces</Text>        
        </View>
      </ImageBackground>
      <Slider
        onEndReached={() => {
          router.navigate('./(tabs)/ProductListScreen');
        } }
        containerStyle={Styles.sliderStyles}
        sliderElement={
          <Ionicons name={"home"} color={"black"} size={45} style={Styles.sliderIcon} />
        }
      >
          <Text>{'Get Started   >>>'}</Text>
        </Slider></>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 10,
  },
  title2: {
    left: 40,
    fontSize: 50,
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    left: 10,
  },
});

export default WelcomeScreen;
