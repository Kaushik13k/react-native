import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Check if the user is already logged in when the component mounts
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // If token exists, navigate to the home screen
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', {
        username,
        password,
      });

      // Handle successful login
      const token = response.data.token;
      // Store authentication token in AsyncStorage
      await AsyncStorage.setItem('token', token);
      // Navigate to home screen
      navigation.navigate('Home');
    } catch (error) {
      // Handle login error
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
