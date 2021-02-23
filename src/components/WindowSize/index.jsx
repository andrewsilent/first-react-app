import React, { Component } from 'react';

class WindowSize extends Component {
  constructor (props) {
    super(props);
    this.state = {
      width: window.visualViewport.width,
      height: window.visualViewport.height,
    };
  }

  onWindowResize = () => {
    this.setState({
      width: window.visualViewport.width,
      height: window.visualViewport.height,
    });
  };

  componentDidMount () {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render () {
    const { width, height } = this.state;
    return (
      <div>
        <h4>Current width of viewport is: {width}</h4>
        <h4>Current height of viewport is: {height}</h4>
      </div>
    );
  }
}

export default WindowSize;
