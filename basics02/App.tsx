import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlashCards from './components/FlashCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlashCards />
          <ElevatedCard />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
