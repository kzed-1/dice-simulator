import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dice from './components/dice'

function App() {
  return (
    <div className="App">
      <h1 className="appTitle"> Dice Simulator </h1>
      <Dice/>
    </div>
  );
}

export default App;
