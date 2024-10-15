import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ResetPassword from '../Screen/ResetPassword';
import ResetInfo from '../Screen/ResetInfo';
import LoginScreen from '../Screen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PasswordSuccessfully from '../Screen/PasswordSuccessfully';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reset" component={ResetInfo} />
        <Stack.Screen name="SetPassword" component={ResetPassword} />
        <Stack.Screen name="PasswordSuccessfully" component={PasswordSuccessfully} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
