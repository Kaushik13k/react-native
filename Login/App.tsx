// App.js
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Check if user data exists in AsyncStorage
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setIsLoggedIn(true); // User is logged in
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false); // Set loading state to false
      }
    };

    checkLoginStatus(); // Check login status when component mounts
  }, []);

  if (isLoading) {
    // Render loading indicator
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          // If user is logged in, navigate to HomeScreen
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          // If user is not logged in, navigate to LoginScreen
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
