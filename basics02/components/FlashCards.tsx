import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlashCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlashCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>BLUE</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>GREEN</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#87CEEB',
  },
  cardThree: {
    backgroundColor: '#90EE90',
  },
});
