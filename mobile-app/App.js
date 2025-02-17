import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function App() {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Welkom bij de Shop</Text>
        <Text style={styles.headerSubtitle}>Ontdek onze nieuwste producten</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,

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
