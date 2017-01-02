import React, { Component } from 'react';

const placeholderText_userInput = 'Enter text with markdown language here.';

class UserInput extends Component {

  render() {
    return (
      <div className='userInputBox'>
      <h4 className='box-title'>Input Area</h4>

        <textarea
          className='textBox'
          placeholder={placeholderText_userInput}
          value={this.props.userInput}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}


export default UserInput;
