import { Component, Fragment } from "react";

class Greeting extends Component {
  render() {
    const { name, photo, sayHello } = this.props;
    return (
      <>
        <h3 className="heading">
          {sayHello ? "Hello" : "Good bye"}, {name}
        </h3>
        <img src={photo} alt={name} />
      </>
    );
  }
}

export default Greeting;
