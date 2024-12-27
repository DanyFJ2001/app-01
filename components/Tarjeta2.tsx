import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function Tarjeta2(props: any) {
  const { informacion } = props;

  function detalles(titulo: string) {
    Alert.alert('Detalles', `El título del juego es: ${titulo}`);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => detalles(informacion.titulo)}
    >
      <Text>{informacion.titulo}</Text>

      <View style={styles.fila}>
        <Image
          source={{ uri: informacion.imagen }}
      
        />
        <Text>{informacion.descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(78, 197, 241)',
    margin: 10,
    borderRadius: 20,
    padding: 10, // opcional, mejora la estética
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 10, // opcional, redondea los bordes de la imagen
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center', // centra verticalmente
    marginTop: 10, // opcional, mejora separación
  },
});
