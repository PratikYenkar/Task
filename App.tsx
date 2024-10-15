import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/Screen/LoginScreen'
import Navigation from './src/Navigation/Navigation'
import LoginScreen from './src/Screen/LoginScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    const setInitialPassword = async () => {
      await AsyncStorage.setItem('userPassword', '12345');
      console.log('Initial password set to 12345');
    };
    setInitialPassword();
  }, []);
  return (
 <Navigation/>

  )
}

export default App