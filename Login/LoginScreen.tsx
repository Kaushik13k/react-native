// LoginScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
  const url = 'http://localhost/entry_point';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkR1bW15IiwiZW1haWwiOiJEdW1teUBEdW1teS5jb20iLCJleHAiOjE3MDg3MTc0OTF9.MzrsKfNCYXiSE0jtz9SPTHgEfrAByGgRvOcNw8N29TY';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const data = {
    query: `
      query ($username: String!, $password: String!) {
        getUser(username: $username, password: $password)
      }
    `,
    variables: {
      username: 'Dummy',
      password: 'Dummy_Dummy',
    },
    operation_name: 'Login',
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(url, data, {headers});

      if (response && response.data) {
        const userData = response.data.response.getUser;
        const {token, username, email} = userData;

        console.info('token:', token);
        console.info('email:', email);
        // Store user data securely using AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(userData));

        // Display a welcome message
        Alert.alert('Login Passed', `Welcome ${username}`);

        // Navigate to the home screen after successful login
        navigation.navigate('Home');
      } else {
        // Handle invalid response
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Error:', error.message);

      // Display a user-friendly error message
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
};

export default LoginScreen;
