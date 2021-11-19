import React from 'react';
import {View, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#F2561D', fontSize: 54, fontWeight: 'bold'}}>
          go
        </Text>
        <Text style={{color: '#02733F', fontSize: 54, fontWeight: 'bold'}}>
          Finance
        </Text>
      </View>
      <Image
        style={styles.imagen}
        source={require('./../imagenes/GoFinanceLogo.png')}
      />
      <Text style={styles.texto}>Tu aplicación para administrar finanzas personales.</Text>

    <TouchableHighlight style={styles.boton} onPress={()=>navigation.navigate('Inicio de sesión')}>
        <Image source={require('./../imagenes/Flecha.png')} />
    </TouchableHighlight>

    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    alignSelf: 'center',
    width: 290,
    height: 280,
    marginVertical: 30,
    resizeMode: 'contain',
  },
  contenedor: {
    padding: 20,
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#EFDEB4'
  },
  texto:{
      color: '#02733F',
      fontSize: 32,
      textAlign: 'center'
  },
  boton:{
      marginTop: 60,
      backgroundColor: '#02733F',
      borderRadius: 200
      
  }
});

export default SplashScreen;
