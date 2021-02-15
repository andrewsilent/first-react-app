import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timerId: null,
      time: new Date(0, 0, 0, 0, 0, 0, 0, 0),
    };
  }

  start = () => {
    this.setState({ isRunning: true });
  };

  clear = () => {
    clearTimeout(this.timerId);
    this.timerId = null;
  };

  stop = () => {
    this.setState({ isRunning: false });
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0, 0), isRunning: false });
  };

  tick = () => {
    this.setState((state, props) => {
      const { time, timerId } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime, timerId };
    });
  };

  componentDidMount() {
    // this.start();
  }

  componentDidUpdate() {
    const { isRunning } = this.state;
    this.clear();
    if (isRunning) {
      this.timerId = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time, isRunning } = this.state;
    return (
      <article>
        <h1>{time.toLocaleTimeString("it-IT")}</h1>
        {isRunning ? (
          <button onClick={this.stop}>Stop</button>
        ) : (
          <button onClick={this.start}>Start</button>
        )}
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
