import React, { Component } from 'react';
import api from '../api';
import Contador from './Contador';
import PlacarContainer from './PlacarContainer'

const dados = {
  partida: {
    estadio: 'Maracanã/RJ',
    data: '27/05/2020',
    horario: '18:00'
  },
  casa: {
    nome: 'Vasco',
  },
  visitante: {
    nome: 'Flamengo',
  }
};

class App extends Component {
  render() {
    return <PlacarContainer partida={dados.partida}
                            casa={dados.casa}
                            visitante={dados.visitante}
      />
  }
}

export default App;
