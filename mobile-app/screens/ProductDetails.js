import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

const SnowBoardProductDetails = ({Navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Image
      source={require('../assets/snowboard1.jpg')}
      style={styles.image}
      resizeMode='cover'
      />
  <View style={styles.detailContainer}>
        <Text style={styles.title}>Super Snowboard</Text>
        <Text style={styles.price}>€299,99</Text>
        <Text style={styles.description}>
          Dit snowboard is geschikt voor zowel beginnende snowboarders en gevorderden.  
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default SnowBoardProductDetails;