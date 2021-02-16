import React, { Component } from "react";

class StepControls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { addStep, subStep } = this.props;
    return (
      <div>
        <button onClick={addStep}>Increase step</button>
        <button onClick={subStep}>Decrease step</button>
      </div>
    );
  }
}

export default StepControls;
