import React, { Component } from "react";

class CountControls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      addCount,
      subCount,
      addStep,
      subStep,
      resetCount,
      mode,
    } = this.props;
    return (
      <div>
        <button onClick={mode ? addStep : addCount}>{mode ? 'Step +' : 'Count +'}</button>
        <button onClick={mode ? subStep : subCount}>{mode ? 'Step -' : 'Count -'}</button>
        <button onClick={resetCount}>reset</button>
      </div>
    );
  }
}

export default CountControls;
