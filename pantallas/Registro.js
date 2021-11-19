import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Registro = ({navigation}) => {
  const [nombreUsuario, guardarNombre] = React.useState('');
  const [email, guardarEmail] = React.useState('');
  const [pass, guardarPass] = React.useState('');

  const crearCuenta = () => {
    if (
      nombreUsuario.trim() === '' ||
      email.trim() === '' ||
      pass.trim() === ''
    ) {
      console.log('Algo falló, los campos están vacios');
      mostrarAlerta();
      return;
    }
  };

  const mostrarAlerta = () => {
    Alert.alert(
      '¡Error', //Titulo
      'Todos los campos son obligatorios', //mensaje
      [
        {text: 'OK', onPress: () => console.log('Presiono el ok')},
        {text: 'cancelar'},
      ],
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedorPadre}>
      <View style={styles.carta}>
        <Text style={styles.titulo}>Registro de nuevos Usuarios</Text>
        <TextInput
          style={styles.camposTexto}
          placeholder="Nombre de usuario"
          value={nombreUsuario}
          onChangeText={nombreUsuario => guardarNombre(nombreUsuario)}
        />

        <TextInput
          style={styles.camposTexto}
          placeholder="Email"
          value={email}
          onChangeText={email => guardarEmail(email)}
        />

        <TextInput
          style={styles.camposTexto}
          placeholder="Contraseña"
          value={pass}
          onChangeText={pass => guardarPass(pass)}
        />

        <TouchableHighlight
          style={styles.botones}
          onPress={() => crearCuenta()}>
          <Text style={styles.letraBotones}>Crear Cuenta</Text>
        </TouchableHighlight>
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
    flex: 1,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#02733E',
    marginBottom: 40,
    textAlign: 'center',
  },

  botones: {
    backgroundColor: '#0ABF04',
    margin: 10,
    marginBottom: 30,
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
  },
});

export default Registro;
