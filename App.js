import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Filme from './componentes/Filme';
import Serie from './componentes/Serie';

export default function App() {
/* TESTE */

  const listaFilmes = [
    {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg",
    },
    {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://m.media-amazon.com/images/I/51120jk-21L._SY445_SX342_.jpg",
    },
    {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/8/8b/Kiss_Of_The_Spiderwoman.jpg",
    },
    {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://upload.wikimedia.org/wikipedia/pt/f/f0/Poltergeist_2015.jpg",
    },
  ];

  const listaSeries = [
    {
      nome: "Buffy, a Caça-Vampiros",
      ano: 1997,
      diretor: "Joss Whedon",
      temporadas: 7,
      capa: "https://static.wikia.nocookie.net/buffy/images/a/a6/B1_p%C3%B4ster.jpg/revision/latest?cb=20200815233353&path-prefix=pt-br",
    },
    {
      nome: "Desperate Housewives",
      ano: 2004,
      diretor: "Marc Cherry",
      temporadas: 8,
      capa: "https://m.media-amazon.com/images/I/71mG-uOrGWL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      nome: "Sons of Anarchy",
      ano: 2008,
      diretor: "Kurt Sutter",
      temporadas: 7,
      capa: "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloSecao}>Filmes</Text>
      {listaFilmes.map((filme, index) => (
        <Filme
          key={index}
          nome={filme.nome}
          ano={filme.ano}
          diretor={filme.diretor}
          tipo={filme.tipo}
          capa={filme.capa}
        />
      ))}

      <Text style={styles.tituloSecao}>Séries</Text>
      {listaSeries.map((serie, index) => (
        <Serie
          key={index}
          nome={serie.nome}
          ano={serie.ano}
          diretor={serie.diretor}
          temporadas={serie.temporadas}
          capa={serie.capa}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  tituloSecao: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
