import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, } from 'react-native';

const SnowBoardProductDetails = ({Navigation}) => {
  return (

    <ImageBackground
    source={require('../assets/snow.jpg')}
    style={styles.productImage}
    resizeMode='cover'
    >  
    <ScrollView style={styles.container}>
      
      <View style={styles.overlay}>
          <Text style={styles.title}>Rocky's Snowboard</Text>
          
          {/* Productafbeelding (optioneel) */}
          <Image 
            source={require('../assets/SnowBoardbg.png')} // Vervang door je eigen snowboardafbeelding
            style={styles.snowboardImage}
            resizeMode="contain"
          />
          
          <Text style={styles.price}>€299,99</Text>
          <Text style={styles.description}>
         Snowboard perfect voor zowel beginners als gevorderden.
          </Text>
          
          <TouchableOpacity style={styles.button} onPress={() => console.log('Koop nu!')}>
            <Text style={styles.buttonText}>Koop Nu</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },

  productImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  snowboardImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  price: {
    fontSize: 22,
    color: '#ffeb3b',
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SnowBoardProductDetails;