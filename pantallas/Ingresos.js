import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const api = 'http://192.168.1.6:3000';

const Ingresos = ({navigation}) => {
  const [ingreso, setIngreso] = React.useState('');

  const ingresar =  () => {
     fetch(api + '/ingresar', {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tipo: 'ingreso',
        valor: ingreso,
      }),
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.contenedorPadre}>
      <View style={styles.carta}>
        <View>
          <TextInput
            style={styles.camposTexto}
            placeholder="Ingresa el valor"
            onChangeText={ingreso => setIngreso(ingreso)}
          />

          <TouchableHighlight style={styles.botones} onPress={() => ingresar()}>
            <Text style={styles.letraBotones}>Guardar</Text>
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
    marginTop: 30,
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
    width: 300,
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

export default Ingresos;
