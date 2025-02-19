import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductCard = ({ image, name, description, navigation }) => {

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button title="Koop nu" onPress={()=> navigation.navigate("HomeScreen")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 20,
    color: '#black',
    marginTop: 5,
    
  },
});

export default ProductCard;
