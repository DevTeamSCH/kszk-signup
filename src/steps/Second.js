import React, { Component } from 'react';

class Second extends Component {
  state = { devteam: false, hat: false, neteam: false, securiteam: false, sysadmin: false };

  isInterested(team) {
    let devteam = this.state.devteam;
    let hat = this.state.hat;
    let neteam = this.state.neteam;
    let securiteam = this.state.securiteam;
    let sysadmin = this.state.sysadmin;
    switch (team) {
      case 'DevTeam':
        devteam = !devteam;
        break;
      case 'Hallgatói Tudásbázis':
        hat = !hat;
        break;
      case 'NETeam':
        neteam = !neteam;
        break;
      case 'SecurITeam':
        securiteam = !securiteam;
        break;
      case 'Sysadmin':
        sysadmin = !sysadmin;
        break;
      default:
        break;
    }
    this.props.addToData({ interest: this.state });
    this.setState({ devteam, hat, neteam, securiteam, sysadmin });
  }

  render() {
    return (
      <div>
        <div className="uk-card-body">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <div className="uk-form-label">Körök amik érdekelnek</div>
              <div className="uk-form-controls">
                <label>
                  <input
                    onChange={this.isInterested.bind(this, 'DevTeam')}
                    className="uk-checkbox"
                    type="checkbox"
                    checked={this.state.devteam}
                  /> DevTeam
                </label>
                <br />
                <label>
                  <input
                    onChange={this.isInterested.bind(this, 'Hallgatói Tudásbázis')}
                    className="uk-checkbox"
                    type="checkbox"
                    checked={this.state.hat}
                  /> Hallgatói Tudásbázis
                </label>
                <br />
                <label>
                  <input
                    onChange={this.isInterested.bind(this, 'NETeam')}
                    className="uk-checkbox"
                    type="checkbox"
                    checked={this.state.neteam}
                  /> NETeam
                </label>
                <br />
                <label>
                  <input
                    onChange={this.isInterested.bind(this, 'SecurITeam')}
                    className="uk-checkbox"
                    type="checkbox"
                    checked={this.state.securiteam}
                  /> SecurITeam
                </label>
                <br />
                <label>
                  <input
                    onChange={this.isInterested.bind(this, 'Sysadmin')}
                    className="uk-checkbox"
                    type="checkbox"
                    checked={this.state.sysadmin}
                  /> Sysadmin
                </label>
              </div>
            </div>
          </form>
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
            onClick={this.props.next.bind(this)}
          >
            <span data-uk-icon="icon: chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export { Second };
