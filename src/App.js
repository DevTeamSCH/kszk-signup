import React, { Component } from 'react';
import Signup from './Signup';
import './App.css';

class App extends Component {
  state = { devices: [], loading: true, error: false, diff: false, first: true, subscribe: [] };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Signup />
      </div>
    );
  }
}

export default App;
