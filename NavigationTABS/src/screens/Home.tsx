import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PRODUCTS_LIST} from '../data/Constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {PRODUCTS_LIST.map(product => (
        <Text key={product.id}>{product.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
