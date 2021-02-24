import React, { Component } from 'react';

class StepControls extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.step === this.props.step;
  }

  render () {
    const { changeMode, stepHandle } = this.props;
    console.log('render');
    return (
      <div>
        <button onClick={changeMode}>Change mode</button>
        <button onClick={() => {stepHandle(+1)} }> Step + </button>
        <button onClick={() => {stepHandle(-1)} }> Step - </button>
      </div>
    );
  }
}

export default StepControls;
