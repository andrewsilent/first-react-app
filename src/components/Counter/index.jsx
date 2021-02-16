import React, { Component } from "react";
import CountElement from "../CountElement";
import CountControls from "../CountControls";
// import StepControls from "../StepControls";
import Mode from "../CountControls/Mode";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
      mode: false,
    };
  }

  addCount = () => {
    this.setState({ count: this.state.count + this.state.step });
  };

  subCount = () => {
    this.setState({ count: this.state.count - this.state.step });
  };

  addStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  subStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  resetCount = () => {
    this.setState({ count: 0, step: 1, mode: false });
  };

  changeMode = () => {
    this.setState({ mode: !this.state.mode });
  };

  render() {
    const { count, step, mode } = this.state;
    return (
      <div>
        <CountElement count={count} step={step} />
        <CountControls
          mode={mode}
          addCount={this.addCount}
          subCount={this.subCount}
          addStep={this.addStep}
          subStep={this.subStep}
          resetCount={this.resetCount}
        />
        <Mode changeMode={this.changeMode} />
        {/* <StepControls addStep={this.addStep} subStep={this.subStep} /> */}
      </div>
    );
  }
}

export default Counter;
