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
    const data = [
        {
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
        {
          id: '5',
          tipo: 'ingreso',
          valor: 5000000,
        },
        {
          id: '6',
          tipo: 'ingreso',
          valor: 50780000,
        },
        {
          id: '7',
          tipo: 'egreso',
          valor: 78900000,
        },
        {
          id: '8',
          tipo: 'ingreso',
          valor: 600000,
        },
        {
          id: '9',
          tipo: 'egreso',
          valor: 6890000,
        },
        {
          id: '10',
          tipo: 'ingreso',
          valor: 70000,
        },
        {
          id: '11',
          tipo: 'egreso',
          valor: 8000,
        },
        {
          id: '12',
          tipo: 'egreso',
          valor: 570000,
        },
        {
          id: '13',
          tipo: 'ingreso',
          valor: 6700000,
        },
        {
          id: '14',
          tipo: 'ingreso',
          valor: 6000000,
        },
        {
          id: '15',
          tipo: 'egreso',
          valor: 300000,
        },
      ];
  return (
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.contenedorBotones}>
        <TouchableHighlight style={styles.botones}>
          <Text style={styles.letraBotones}>Ingresos</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.botones}>
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
