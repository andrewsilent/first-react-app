import { Component, Fragment } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sayHello: true,
    };
  }
  switchHello = () => {
    const { sayHello } = this.state;
    this.setState({
      sayHello: !sayHello,
    });
  };
  render() {
    const { sayHello } = this.state;
    const { name, photo } = this.props;
    return (
      <>
        <h3 className="heading" onClick={this.switchHello}>
          {sayHello ? "Hello" : "Good bye"}, {name}
        </h3>
        <img src={photo} alt={name} />
      </>
    );
  }
}

export default Greeting;
