import React, { Component } from 'react';
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
    return <PlacarContainer {...dados} tempo={92}/>
  }
}

export default App;
