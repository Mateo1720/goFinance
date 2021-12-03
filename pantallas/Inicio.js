import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from '../componentes/Item';



const Inicio = ({navigation}) => {
    const data = [{
      id: '1',
          tipo: 'ingreso',
          valor: 100000,
        },
        {
          id: '2',
          tipo: 'egreso',
          valor: 2000000,
        },
        {
          id: '3',
          tipo: 'ingreso',
          valor: 800000,
        },
        {
          id: '4',
          tipo: 'ingreso',
          valor: 600000,
        },

    ];
  return (
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.contenedorBotones}>
        <TouchableHighlight style={styles.botones} onPress={()=> navigation.navigate('Ingresos')}>
          <Text style={styles.letraBotones}>Ingresos</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.botones} onPress={()=> navigation.navigate('Egresos')}>
          <Text style={styles.letraBotones}>Egresos</Text>
        </TouchableHighlight>
      </View>
      <Text style={styles.titulo}>Movimientos</Text>
      {/* <View>
          <Text>
              {'Ingresos' + ' ' + setTimeout(data.filter(data => data.tipo == 'ingreso'), 3000)}
          </Text>
      </View> */}
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
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
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#02733E',
    marginBottom: 10,
  },

  botones: {
    backgroundColor: '#0ABF04',
    margin: 10,
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    flex: 1,
    height: 56,
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

  contenedorBotones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },

  contenedorInicio: {
    flex: 1,
  },
});

export default Inicio;
