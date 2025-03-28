import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Serie = ({ nome, ano, diretor, temporadas, capa }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: capa }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.titulo}>{nome}</Text>
        <Text>Ano: {ano}</Text>
        <Text>Diretor: {diretor}</Text>
        <Text>Temporadas: {temporadas}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'flex', 
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 150,
    marginRight: 10,
    flex: 1,
  },
  info: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Serie;