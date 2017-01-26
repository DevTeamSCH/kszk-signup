import React, { Component } from 'react';

class Fourth extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.prev.bind(this)}>
          prev
        </button>
        Név: {this.props.data.name}<br />
        email: {this.props.data.mail}<br />
        jövök: {this.props.data.date}<br />
        szöveg: {this.props.data.text}<br />
        <button onClick={this.props.upload.bind(this)}>
          reset
        </button>
      </div>
    );
  }
}

export { Fourth };
