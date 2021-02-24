import React, { Component } from 'react';
import CountElement from '../CountElement';
import CountControls from '../CountControls';
import StepControls from '../StepControls';
import Autoclick from '../Autoclick';

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
      countMode: false,
      autoclick: false,
      autoclickTimeout: 30,
      autoclickInterval: 1000,
      intervalId: null,
    };
  }

  countHandle = () => {
    if (this.state.countMode) {
      this.setState({ count: this.state.count - this.state.step });
    } else {
      this.setState({ count: this.state.count + this.state.step });
    }
  };

  stepHandle = step => {
    this.setState({ step: this.state.step + step });
  };

  resetCounter = () => {
    this.autoclickerReset();
    this.setState({
      count: 0,
      step: 1,
      countMode: false,
      autoclick: false,
      autoclickTimeout: 30,
    });
  };

  changeMode = () => {
    this.setState({ countMode: !this.state.countMode });
  };

  autoclickerToggle = () => {
    const {
      autoclick,
      intervalId,
      autoclickTimeout,
      autoclickInterval,
    } = this.state;
    if (autoclick) {
      clearInterval(intervalId);
      this.setState({ autoclick: !autoclick });
    } else {
      if (autoclickTimeout > 0) {
        const newIntervalId = setInterval(() => {
          this.autoclick();
        }, autoclickInterval);
        this.setState({
          autoclick: !autoclick,
          intervalId: newIntervalId,
        });
      } else {
        this.autoclickerReset();
      }
    }
  };

  autoclick = () => {
    const { autoclickTimeout, autoclick } = this.state;
    if (autoclickTimeout > 0 && autoclick) {
      this.countHandle();
      this.autoclickTimeoutHandle();
    } else {
      this.autoclickerReset();
    }
  };

  autoclickerReset = () => {
    const { autoclick, intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({
      autoclick: !autoclick,
      autoclickTimeout: 30,
    });
  };

  autoclickTimeoutHandle = () => {
    this.setState({ autoclickTimeout: this.state.autoclickTimeout - 1 });
  };

  componentDidMount () {
    if (!this.state.autoclick) {
      this.autoclickerToggle();
    }
  }

  render () {
    const { count, step, countMode, autoclickTimeout } = this.state;
    return (
      <div>
        <CountElement
          count={count}
          step={step}
          autoclickTimeout={autoclickTimeout}
        />
        <CountControls
          countMode={countMode}
          countHandle={this.countHandle}
          resetCounter={this.resetCounter}
        />
        <StepControls
          stepHandle={this.stepHandle}
          changeMode={this.changeMode}
          step={this.state.step}
        />
        <Autoclick autoclickerToggle={this.autoclickerToggle} />
      </div>
    );
  }
}

export default Counter;
