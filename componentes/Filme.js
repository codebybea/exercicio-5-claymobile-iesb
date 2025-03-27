import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: capa }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.titulo}>{nome}</Text>
        <Text>Ano: {ano}</Text>
        <Text>Diretor: {diretor}</Text>
        <Text>Gênero: {tipo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  imagem: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Filme;