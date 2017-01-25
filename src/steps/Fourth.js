import React, { Component } from 'react';

class Fourth extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.prev.bind(this)}>
          prev
        </button>
        I am Fourth
        <button onClick={this.props.upload.bind(this)}>
          reset
        </button>
      </div>
    );
  }
}

export { Fourth };
