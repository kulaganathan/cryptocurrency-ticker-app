import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tickers from './components/Tickers.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Cryptocurrency Ticker</h2>
        </header>
        <Tickers/> 
      </div>
    );
  }
}

export default App;
