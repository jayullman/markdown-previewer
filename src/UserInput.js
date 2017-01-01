import React, { Component } from 'react';


class UserInput extends Component {

  render() {
    return (
      <div className='userInputBox'>
        <textarea
          className='textBox'
          value={this.props.userInput}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}


export default UserInput;
