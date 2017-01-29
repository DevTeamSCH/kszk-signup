import React, { Component } from 'react';

class Fourth extends Component {
  upload() {
    const interest = this.renderTeams();
    this.props.addToData(interest);
    this.props.upload();
  }

  renderTeams() {
    const { devteam, hat, neteam, securiteam, sysadmin } = this.props.data;
    const interest = [];
    [devteam, hat, neteam, securiteam, sysadmin].forEach((val, index) => {
      switch (index) {
        case 0:
          if (val) {
            interest.push('DevTeam');
          }
          break;
        case 1:
          if (val) {
            interest.push('Hallgatói Tudásbázis');
          }
          break;
        case 2:
          if (val) {
            interest.push('NeTeam');
          }
          break;
        case 3:
          if (val) {
            interest.push('SecurITeam');
          }
          break;
        case 4:
          if (val) {
            interest.push('Sysadmin');
          }
          break;
        default:
          break;
      }
    });
    return interest;
  }

  render() {
    const { name, mail, date, text } = this.props.data;
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
              <ul className="uk-list">
                { this.renderTeams().map((interest, index) => {
                    return (<li className="uk-margin-remove" key={index}>{interest}</li>);
                  })
                }
              </ul>
            </dd>
            <dt>
              Időpont
            </dt>
            <dd>
              {date ? 'Megfelel' : 'Nem felel meg'}
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
