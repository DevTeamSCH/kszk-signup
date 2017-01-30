import React, { Component } from 'react';

class Error extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.error();
    }, 2000);
  }

  error() {
    this.props.addToData({ 
      step: 0,
      name: '',
      mail: '',
      interest: [],
      date: true,
      text: '',
      devteam: false,
      hat: false,
      neteam: false,
      securiteam: false,
      sysadmin: false
     });
  }

  render() {
    return (
      <div>
        <div className="uk-card-body" fontSize="12px">
          <p style={{ textAlign: 'center', fontSize: '1.3em' }}>
            <span data-uk-icon="icon: ban; ratio: 5" />
            <br />
            Hiba történt, kérlek próbáld újra!
          </p>
        </div>
      </div>
    );
  }
}

export { Error };
