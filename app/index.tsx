import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Slider from 'react-native-slide-to-unlock';
import { router } from 'expo-router';
import { Styles } from '@/utils/Styles';



const WelcomeScreen = () => {
  return (
    <><ImageBackground
      source={require('@/assets/images/welcomechair.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Everything your home deserves</Text>
        <Text style={styles.subtitle}>Total Furniture Solutions for Hotels, Apartments, Residences, and Commercial Office Spaces</Text>
      </View>
    </ImageBackground>
    <Slider
      onEndReached={() => {
        router.navigate('./(tabs)/ProductListScreen');
      } }
      containerStyle={Styles.sliderStyles}
      sliderElement={
        <Image
          style={Styles.sliderIcon}
          source={require('@/assets/images/welcomechair.png')}
        />
      }
    >
        <Text>{'Get Started   >>>'}</Text>
      </Slider></>
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
    fontSize: 30,
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
