import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Pagina7Screen() {
  const [gradosKelvin, setGradosKelvin] = useState(''); 
  const gradosCelsius = gradosKelvin ? parseFloat(gradosKelvin) - 273 : 0; 
  const [farh,setfarh]= useState(0)
  

if(gradosCelsius>0){
  Alert.alert("Se ha superado la temperatura de ebullicion del agua")
  
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transformación</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar Grados Kelvin"
        placeholderTextColor="#aaaaaa"
        keyboardType="numeric"
        value={gradosKelvin}
        onChangeText={(text) => setGradosKelvin(text)} 
      />
      <Text style={styles.result}>Resultado en Celsius: {gradosCelsius}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
  },
});
