import React, { Component } from 'react'

class Output extends Component {

  render() {
    return (
      <div className='outputContainer'>
        <h4 className='box-title'>Markdown Preview</h4>

        <div
          className='outputBox'
          dangerouslySetInnerHTML={this.props.markedUpInput} />
      </div>
    )
  }
}

export default Output;
