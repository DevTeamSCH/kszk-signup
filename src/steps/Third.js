import React, { Component } from 'react';

class Third extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.prev.bind(this)}>
          prev
        </button>
        I am Third
        <button onClick={this.props.next.bind(this)}>
          next
        </button>
      </div>
    );
  }
}

export { Third };
