import React, { Component } from 'react'
import './styles/App.css'



class Output extends Component {

  render() {
    return (
      <div className='outputBox' dangerouslySetInnerHTML={this.props.markedUpInput} />
    )
  }
}

export default Output;
