import React, { Component } from 'react';

class Fourth extends Component {
  upload() {
    this.props.upload();
  }

  render() {
    const { name, mail, interest, date, text } = this.props.data;
    return (
      <div>
        <div className="uk-card-body">
          <dl className="uk-description-list uk-description-list-divider">
            <dt>
              Név
            </dt>
            <dd>
              {name}
            </dd>
            <dt>
              E-mail cím
            </dt>
            <dd>
              {mail}
            </dd>
            <dt>
              Érdekelt körök
            </dt>
            <dd>
              {interest}
            </dd>
            <dt>
              Időpont
            </dt>
            <dd>
              Az időpont: {date ? 'megfelel' : 'nem felel meg'}
            </dd>
            <dt>
              Üzenet
            </dt>
            <dd>
              {text}
            </dd>
          </dl>
        </div>

        <div className="uk-card-footer">
          <button
            className="uk-margin-remove uk-button uk-button-secondary uk-align-left"
            onClick={this.props.prev.bind(this)}
          >
            <span data-uk-icon="icon: chevron-left" />
          </button>
          <button
            className="uk-margin-remove uk-button uk-button-primary uk-align-right"
            onClick={this.upload.bind(this)}
          >
            <span data-uk-icon="icon: check; ratio: 1.5" />
          </button>
        </div>
      </div>
    );
  }
}

export { Fourth };
