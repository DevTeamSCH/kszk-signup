import React, { Component } from 'react';
import Markdown from './Markdown';
import Signup from './Signup';
import Slideshow from './Slideshow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div data-uk-sticky className="uk-navbar-container tm-navbar-container" id="navbar">
          <div className="uk-container">
            <nav className="uk-navbar">
              <div className="uk-navbar-left">
                <a className="uk-navbar-item uk-logo">
                  <object data="kszk.svg" type="image/svg+xml" width="30px">
                    <img src="kszk.png" width="30px" alt="logo" />
                  </object>
                  &nbsp;KSZKépzés 2017
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="body">
          <div id="rolunk" className="uk-section uk-section-primary uk-light">
            <div className="uk-container">
              <h3>Reszortunk bemutatkozása</h3>
              <div>
                <Markdown path={'/markdown/bemutatkozas.md'} />
              </div>
            </div>
          </div>

          <div id="lehetosegek" className="uk-section uk-section-secondary uk-light">
            <div className="uk-container">
              <h3>Lehetőségek</h3>
              <div>
                <Markdown path={'/markdown/lehetosegek.md'} />
              </div>
            </div>
          </div>

          <div id="koreink" className="uk-section uk-section-muted">
            <div className="uk-container">
              <h3>Köreink bemutatkozása</h3>
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

          <div id="projektjeink" className="uk-section uk-section-primary uk-light">
            <div className="uk-container">
              <h3>Projektjeink</h3>
              <div>
                <Markdown path={'/markdown/projektjeink.md'} />
                  <Slideshow start={1} stop={7} />
              </div>
            </div>
          </div>

          <div id="kozosseg" className="uk-section uk-section-secondary uk-light">
            <div className="uk-container">
              <h3>Közösség</h3>
              <div>
                <Markdown path={'/markdown/kozosseg.md'} />
                <Slideshow start={9} stop={12} />
              </div>
            </div>
          </div>

          <div id="kepzesunk" className="uk-section uk-section-muted">
            <div className="uk-container">
              <h3>Képzésünk</h3>
              <div>
                <Markdown path={'/markdown/kepzesunk.md'} />
                <Slideshow start={13} stop={14} />
              </div>
            </div>
          </div>

          <div id="jelentkezes" className="uk-section uk-section-default">
            <div className="uk-container">
              <h3>Jelentkezés</h3>
              <p>
                Ha bármilyen kérdésed van, keress minket bátran – a
                105-ben mindig találsz valakit.
              </p>
              <Signup />
            </div>
          </div>

          <div className="uk-section uk-section-secondary uk-light uk-padding-remove">
            <div className="uk-container">
                <p id="footer">
                  Created by DevTeam © 2017.
                </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
