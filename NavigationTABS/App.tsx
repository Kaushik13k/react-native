import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

export type Product = {
  id: string;
  name: string;
};

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Trending Products'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Products Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
