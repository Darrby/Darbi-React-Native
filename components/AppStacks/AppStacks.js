import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../../Screens/Main/MainScreen';
import Home from '../../Screens/Home/Home';
import SignIn from '../../Screens/SignIn/SignIn';
import ScreenOTP from '../../Screens/ScreenOTP/ScreenOTP';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScreenOTP"
          component={ScreenOTP}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
