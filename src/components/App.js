import React, { Component } from 'react';
import api from '../api';
import Contador from './Contador';

class App extends Component {
  render() {
    return (
      <div>
        <Contador />
      </div>
    )
  }
}

export default App;
