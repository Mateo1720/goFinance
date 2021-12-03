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
import Inicio from './pantallas/Inicio';
import Ingresos from './pantallas/Ingresos';
import Egresos from './pantallas/Egresos';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Inicio de sesión' component={Login}/>
        <Stack.Screen name='Registro' component={Registro}/>
        <Stack.Screen name='Inicio' component={Inicio}/>
        <Stack.Screen name='Ingresos' component={Ingresos}/>
        <Stack.Screen name='Egresos' component={Egresos}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
};

export default App;
