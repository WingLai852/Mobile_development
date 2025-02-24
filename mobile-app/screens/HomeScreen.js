import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Welkom bij snowboard shop</Text>
        <Text style={styles.headerSubtitle}>Ontdek onze nieuwste producten</Text>
      </View>

     

      <View style={styles.Productcontainer}>
        <ProductCard
          img={require('../assets/snowboard1.jpg')}
          name="Burton Custom Snowboard"
          description="500 euro"
          navigation={navigation}
        />
        <ProductCard
          img={require('../assets/snowboard1.jpg')}
          name="Burton Custom Snowboard"
          description="500 euro"
          navigation={navigation}
        />
        <ProductCard
          img={require('../assets/snowboard1.jpg')}
          name="Burton Custom Snowboard"
          description="500 euro"
          navigation={navigation}
        />

        <ProductCard
          img={require('../assets/snowboard1.jpg')}
          name="Burton Custom Snowboard"
          description="500 euro"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 90,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;