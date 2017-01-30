import React, { Component } from 'react';

class Success extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.success();
    }, 3000);
  }

  success() {
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
            <span data-uk-icon="icon: check; ratio: 5" />
            <br />
            Sikeres jelentkezés!
          </p>
        </div>
      </div>
    );
  }
}

export { Success };
