import React, { Component } from 'react';
//import 'uikit/dist/css/uikit.min.css';
import Signup from './Signup';
import Markdown from './Markdown';
//import './App.css';

class App extends Component {
  state = { devices: [], loading: true, error: false, diff: false, first: true, subscribe: [] };

  render() {
    return (
      <div className="App">
        <div uk-sticky>
          Anyád
        </div>

        <div className="uk-container uk-backgorund">
          <ul data-uk-accordion>
            <li>
              <h3 className="uk-accordion-title">DevTeam</h3>
              <div className="uk-accordion-content">
                <Markdown path={'/markdown/DevTeam.md'} />
              </div>

              <h3 className="uk-accordion-title">Hallgatói Tudásbázis</h3>
              <div className="uk-accordion-content">
                <Markdown path={'/markdown/DevTeam.md'} />
              </div>

              <h3 className="uk-accordion-title">NETeam</h3>
              <div className="uk-accordion-content">
                <Markdown path={'/markdown/DevTeam.md'} />
              </div>

              <h3 className="uk-accordion-title">SecurITeam</h3>
              <div className="uk-accordion-content">
                <Markdown path={'/markdown/DevTeam.md'} />
              </div>

              <h3 className="uk-accordion-title">Sysadmin</h3>
              <div className="uk-accordion-content">
                <Markdown path={'/markdown/DevTeam.md'} />
              </div>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
