/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pantallas/Login';
import Registro from './pantallas/Registro';
import SplashScreen from './pantallas/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Inicio de sesión' component={Login}/>
        <Stack.Screen name='Registro' component={Registro}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
};

export default App;
