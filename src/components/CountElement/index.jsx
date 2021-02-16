import React, { Component } from "react";

class CountElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, step } = this.props;
    return (
      <div>
        <h1>Count: {count}</h1>
        <h2>Step: {step}</h2>
      </div>
    );
  }
}

export default CountElement;
