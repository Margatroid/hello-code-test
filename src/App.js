import React, { Component } from 'react';
import CheckboxWithLabel from './components/CheckboxWithLabel';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Checkbox with label</h1>
        </header>
        <div className='App-container'>
          <CheckboxWithLabel/>
        </div>
      </div>
    );
  }
}

export default App;
