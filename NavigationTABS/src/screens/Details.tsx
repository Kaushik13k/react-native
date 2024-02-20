import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = ({route}) => {
  const {product} = route.params;
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Text>{product.name}</Text>
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

export default Details;
