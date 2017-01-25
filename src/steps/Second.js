import React, { Component } from 'react';

class Second extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.prev.bind(this)}>
          prev
        </button>
        I am Second
        <button onClick={this.props.next.bind(this)}>
          next
        </button>
      </div>
    );
  }
}

export { Second };
