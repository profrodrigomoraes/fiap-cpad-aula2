import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Cartao } from './Cartao';

const pessoas = [
  {
    id: '1',
    nome: 'Anderson Silva',
    cargo: 'Aluno de Ciência da Computação',
    foto: require('./assets/avatar1.jpg'),
  },
  {
    id: '2',
    nome: 'Beatriz Lima',
    cargo: 'Aluna de Engenharia de Software',
    foto: require('./assets/avatar2.jpg'),
  },
    {
    id: '3',
    nome: 'Rodrigo Moraes',
    cargo: 'Professor',
    foto: require('./assets/avatar3.jpg'),
  },
  
];


export default function App() {
  return (

    
    <ScrollView contentContainerStyle={styles.container}>

    <Cartao 
      nome={"Rodrigo"}
      cargo={"Professor"}
      foto={require('./assets/avatar3.jpg')}
    />
    <Cartao 
      nome={"Rodrigo"}
      cargo={"Professor"}
      foto={require('./assets/avatar3.jpg')}
    />    <Cartao 
      nome={"Rodrigo"}
      cargo={"Professor"}
      foto={require('./assets/avatar3.jpg')}
    />    <Cartao 
      nome={"Rodrigo"}
      cargo={"Professor"}
      foto={require('./assets/avatar3.jpg')}
    />
     <Cartao 
      nome={"Rodrigo"}
      cargo={"Professor"}
      foto={require('./assets/avatar3.jpg')}
    /> <Cartao 
      nome={"Rodrigo"}
      cargo={"Professor"}
      foto={require('./assets/avatar3.jpg')}
    /> <Cartao 
      nome={"Rodrigo"}
      cargo={"Professor"}
      foto={require('./assets/avatar3.jpg')}
    />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
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