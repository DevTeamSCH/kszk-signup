import React, { Component } from 'react';

class First extends Component {
  render() {
    return (
      <div>I am first<button onClick={this.props.next.bind(this)}>next</button></div>
    );
  }
}

export { First };
