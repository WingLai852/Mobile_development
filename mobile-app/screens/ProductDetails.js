import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, } from 'react-native';


const SnowBoardProductDetails = ({ route }) => {
  const { name, description, price } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <ImageBackground
      source={require('../assets/snow.jpg')}
      style={styles.productImage}
      resizeMode='cover'
    >
      <ScrollView style={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{Number(price) * quantity}</Text>
          <Image
            source={require('../assets/SnowBoardbg.png')}
            style={styles.snowboardImage}
            resizeMode="contain"
          />
          <Text style={styles.quantity}>Quantity: {quantity}</Text>
          <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
            <Text style={styles.button2}>Increase Quantity</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
            <Text style={styles.button2}>Decrease Quantity</Text>
          </TouchableOpacity>
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
  
  name: {
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
  button2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SnowBoardProductDetails;