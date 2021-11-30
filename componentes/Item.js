import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Item = ({item}) => {

    function renderElement(){
        if(item.tipo == 'ingreso'){
            return <Image
            style={styles.icono}
            source={require('./../imagenes/iconos/ingresos-01.png')}/>;
        }else{
            return <Image
            style={styles.icono}
            source={require('./../imagenes/iconos/egresos-01.png')}/>
        }
     }

    return (
        <View style={styles.contenedor}>
            
            {renderElement()}
          <Text style={styles.valor}>{'$' + ' ' + item.valor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        height: 50,
        padding: 10,
        margin:10,
        backgroundColor: '#E2E1D9',
        borderRadius: 10,
        flexDirection: "row"
    },
    icono:{
        width: 30,
        height: 30
    },
    valor:{
        fontSize: 18,
        fontWeight: "bold",
        marginStart: 20
    }
})

export default Item
