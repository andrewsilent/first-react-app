import React, { Component } from "react";

class Mode extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { changeMode } = this.props;
    return <button onClick={changeMode}>Change mode</button>;
  }
}

export default Mode;
