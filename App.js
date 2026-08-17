import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('./assets/avatar1.jpg')} style={styles.foto} />
        <Text style={styles.nome}>Anderson Silva</Text>
        <Text style={styles.cargo}>Aluno de Ciência da Computação</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#060922',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    borderColor: '#333',
    borderWidth: 1,
    width: 350,
    alignItems: 'center',
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cargo: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  }
});