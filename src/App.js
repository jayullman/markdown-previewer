import React, { Component } from 'react';
import UserInput from './UserInput';

import marked from 'marked';
import logo from './logo.svg';
import './App.css';

// Check out FCC React Challenge 32 for basic architecture of this app

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
          <h3>A freeCodeCamp Project</h3>
        </div>
        <p className="App-intro">
          Enter text with the markdown langauge and it will be parsed in real time
        </p>

        <UserInput />
        {/*
        <Output />
        */}
      </div>
    );
  }
}

// marked import test
console.log(marked('__hello__'));

export default App;
