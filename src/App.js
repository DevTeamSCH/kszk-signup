import React, { Component } from 'react';
import Markdown from './Markdown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div data-uk-sticky className="uk-navbar-container tm-navbar-container" >
            hali
        </div>

        <div className="body">
          <div className="uk-section uk-section-primary uk-light">
            <div className="uk-container">
              <h3>A KSZK-ról</h3>
              <div>
                <Markdown path={'/markdown/bemutatkozas.md'} />
              </div>
            </div>
          </div>

          <div className="uk-section uk-section-secondary uk-light">
            <div className="uk-container">
              <h3>Lehetőségek</h3>
              <div>
                <Markdown path={'/markdown/lehetosegek.md'} />
              </div>
            </div>
          </div>

          <div className="uk-section uk-section-muted">
            <div className="uk-container">
              <h3>Köreink</h3>
              <div>
                <ul data-uk-accordion>
                  <li>
                    <h3 className="uk-accordion-title">DevTeam</h3>
                    <div className="uk-accordion-content">
                      <Markdown path={'/markdown/DevTeam.md'} />
                    </div>
                  </li>
                  <li>
                    <h3 className="uk-accordion-title">Hallgatói Tudásbázis</h3>
                    <div className="uk-accordion-content">
                      <Markdown path={'/markdown/HAT.md'} />
                    </div>
                  </li>
                  <li>
                    <h3 className="uk-accordion-title">NETeam</h3>
                    <div className="uk-accordion-content">
                      <Markdown path={'/markdown/NETeam.md'} />
                    </div>
                  </li>
                  <li>
                    <h3 className="uk-accordion-title">SecurITeam</h3>
                    <div className="uk-accordion-content">
                      <Markdown path={'/markdown/SecurITeam.md'} />
                    </div>
                  </li>
                  <li>
                    <h3 className="uk-accordion-title">Sysadmin</h3>
                    <div className="uk-accordion-content">
                      <Markdown path={'/markdown/Sysadmin.md'} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default App;
