import React, { Component } from 'react';
import logo from './logo.svg';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Datagraphs</h2>
        </div>
        <p className="App-intro">
          Enter your data and see graphical results
        </p>
        <div className="container">
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;
