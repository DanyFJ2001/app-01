import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function Pagina2Screen() {
  const datos = [
    {
      nombre: 'Juan Paz',
      edad: 23,
    },
    {
      nombre: 'Ana Cruz',
      edad: 26,
    },
    {
      nombre: 'Jose Guerra',
      edad: 15,
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: 'center' }}>USUARIOS</Text>

      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()} // agrega un key extractor para evitar errores
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 20 }}>{item.nombre}</Text>
            <Text style={{ color: 'gray' }}>Edad: {item.edad}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
