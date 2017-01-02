import React, { Component } from 'react';
import UserInput from './UserInput';
import Output from './Output';

// import the markup library
import marked from 'marked';


// Check out FCC React Challenge 32 for basic architecture of this app

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      markedUpInput: ''
    };
  }

  handleChange = (evt) => {
    this.setState({
      userInput: evt.target.value,
      markedUpInput: marked(evt.target.value)
    });
  }

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
        <div className="uiContainer">

          <UserInput
            userInput={this.state.userInput}
            handleChange={this.handleChange} />

          <Output markedUpInput={{__html: this.state.markedUpInput}} />
        </div>
      </div>
    );
  }
}

export default App;
