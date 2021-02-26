import React, { Component } from 'react';

class ArrayElementUsage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9],
    };
  }

  search = () => {
    const map = new Map();
    let result = undefined;
    this.state.arr.map(e => {
      map.has(e) ? map.set(e, map.get(e) + 1) : map.set(e, 1);
    });
    console.log(map);
    map.forEach((e,i) => (e > result ? (result = e) : result));
    console.log(result);
  };

  componentDidMount () {
    this.search();
  }

  render () {
    return (
      <div>
        <h1>ArrayElementUsage</h1>
      </div>
    );
  }
}

export default ArrayElementUsage;
