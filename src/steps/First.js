import React, { Component } from 'react';

class First extends Component {
  componentWillMount() {
    const { name, mail } = this.props.data;
    this.setState({ name, mail });
  }

  mailTypes(event) {
    this.setState({ mail: event.target.value });
  }

  nameTypes(event) {
    this.setState({ name: event.target.value });
  }

  next() {
    this.props.addToData({ name: this.state.name, mail: this.state.mail });
    this.props.next();
  }

  render() {
    return (
      <div>
        <div className="uk-card-body" style={{ paddingBottom: '0px' }}>
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="first">
                Név
              </label>
              <div className="uk-form-controls">
                <input
                  onChange={this.nameTypes.bind(this)}
                  value={this.state.name}
                  className="uk-input"
                  type="text"
                  placeholder="KSZ Karcsi"
                />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="first">
                E-mail
              </label>
              <div className="uk-form-controls">
                <input
                  onChange={this.mailTypes.bind(this)}
                  value={this.state.mail}
                  className="uk-input"
                  type="text"
                  placeholder="mail@kszk.info"
                />
              </div>
            </div>
          </form>

          <div className="uk-card-footer" style={{ paddingRight: '0px' }}>
            <button
              className="uk-margin-remove uk-button uk-button-primary uk-align-right"
              onClick={this.next.bind(this)}
            >
              <span data-uk-icon="icon: chevron-right" />
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  export { First };
