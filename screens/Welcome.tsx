import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

export default function Welcome({ navigation }:any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Drawer")}>
        <Text>Nombre</Text>
        <Text>Dany Fernandez</Text>
        <Text>Carrera</Text>
        <Text>Desarrollo de Software</Text>
        <Image 
          source={require ("../assets/images/cat.png")} 
          style={styles.image} 
        />
        <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 35,
    color: '#000',
  },
});
