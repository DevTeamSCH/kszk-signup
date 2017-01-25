import React, { Component } from 'react';
import Remarkable from 'remarkable';
import axios from 'axios';

class Markdown extends Component {
  state = { markdown: '' };

  componentWillMount() {
    axios.get(this.props.path).then(markdown => {
      this.setState({ markdown: markdown.data });
    });
  }

  getRawMarkup() {
    const md = new Remarkable('full');
    console.log(this.state.markdown);
    return { __html: md.render(this.state.markdown) };
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.getRawMarkup()} />
    );
  }
}

export default Markdown;
