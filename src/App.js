import React from 'react';
import './App.css';
import Crypto from './components/Crypto';

function App() {
  return (
    <div className="cointainer">
      <div className="App-header">
        <img src="../logo.png" className="App-logo" alt="logo" />

        <h1>Crypto Rate</h1>

      </div>
      <hr/>
      <div className="App-header">
      <Crypto />
      </div>
    </div>
  );
}

export default App;
