import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'; // asegurarte de importar 'image'
import React from 'react';

export default function Tarjeta(props: any) {
 
  const { informacion } = props;
  function detalles (nombre:string) {}{

  }

  
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={()=>detalles (props.informacion.name)}
    >
    
      <Text>{informacion.name}</Text>

    <View style={styles.fila}>
      <Image
        source={{ uri: informacion.image }}
        style={styles.img}
      />
      <Text>{props.informacion.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({


     container:{
backgroundColor:'rgb(78, 197, 241)',
margin:10,
borderRadius:20

     },
  img: {
    height: 70,
    width: 70,
  },
  fila :{ flexDirection:'row'}
});
