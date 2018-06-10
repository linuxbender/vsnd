import React, { Component } from 'react';
import Button from './components/Base/Button';
import Header from './components/Base/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <Button />
        </p>
      </div>
    );
  }
}

export default App;
