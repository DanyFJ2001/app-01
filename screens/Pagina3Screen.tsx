import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import datos from '../assets/data/crash.json';
import Tarjeta from '../components/Tarjeta';

export default function Pagina3Screen() {
  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 10 }}>
        Personajes
      </Text>
      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <Tarjeta informacion={item} /> 
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
