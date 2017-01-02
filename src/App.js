import React, { Component } from 'react';
import UserInput from './UserInput';
import Output from './Output';
import Header from './Header';

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
        <Header />
        <p className="App-intro">
          Enter text with markdown syntax to see it parsed in real time and
          displayed in the markdown preview area.</p>
        <p className="App-intro">
          Check out the <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Markdown#Example">wikipedia</a> example
            section to learn more.</p>
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
