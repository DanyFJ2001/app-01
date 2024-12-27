import { StyleSheet, Text, View, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import data from '../assets/data/juegos.json'; // asegúrate de importar correctamente el archivo JSON

export default function Pagina4Screen() {
  const { videojuegos } = data; // extrae el arreglo videojuegos
  const [modalVisible, setModalVisible] = useState(false); // estado para el modal
  const [selectedGame, setSelectedGame] = useState(null); // estado para el juego seleccionado

  const handlePress = (game) => {
    setSelectedGame(game); // guarda el juego seleccionado
    setModalVisible(true); // muestra el modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Videojuegos</Text>
      <FlatList
        data={videojuegos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)} style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.img} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.titulo}</Text>
              <Text style={styles.description}>{item.descripcion}</Text>
              <Text style={styles.details}>Plataforma: {item.plataforma.join(', ')}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {selectedGame && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedGame.titulo}</Text>
              <Image source={{ uri: selectedGame.imagen }} style={styles.modalImg} />
              <Text style={styles.modalDescription}>{selectedGame.descripcion}</Text>
              <Text style={styles.modalDetails}>Plataforma: {selectedGame.plataforma.join(', ')}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e2f',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#00ffcc',
    
  },
  card: {
    backgroundColor: '#29294a',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#c4c4c4',
  },
  details: {
    fontSize: 14,
    color: '#7f7fff',
  },
  // estilos del modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // fondo semitransparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#29294a',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ffcc',
    marginBottom: 10,
  },
  modalImg: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 14,
    color: '#7f7fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#00ffcc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#29294a',
  },
});
