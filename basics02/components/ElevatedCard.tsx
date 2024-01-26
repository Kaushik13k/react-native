import {ScrollView, StyleSheet, Text, TextBase, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😀</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😇</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😍</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>🧐</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😎</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>🥳</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>🤬</Text>
        </View>
      </ScrollView>
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
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
  },
});
