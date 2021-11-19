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
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Login = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.contenedorPadre}>
      <View style={styles.carta}>
        <View>
          <Image
            style={styles.logo}
            source={require('./../imagenes/GoFinanceLogo_alt.png')}
          />
        </View>

        <View>
          <TextInput style={styles.camposTexto} placeholder="Email" />

          <TextInput style={styles.camposTexto} placeholder="Contraseña" />

          <TouchableHighlight style={styles.botones}>
            <Text style={styles.letraBotones}>Iniciar sesión</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.botones}>
            <Text style={styles.letraBotones}>Iniciar sesión con Google</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.botones} onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.letraBotones}>Crear Cuenta</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 270,
    height: 260,
    marginVertical: 30,
  },

  contenedorPadre: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#02733E',
    marginBottom: 10,
  },

  botones: {
    backgroundColor: '#0ABF04',
    margin: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
  },

  letraBotones: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  camposTexto: {
    height: 50,
    marginHorizontal: '5%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },

  carta: {
    width: '90%',
    height: '95%',
    backgroundColor: '#EFDEB4',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
