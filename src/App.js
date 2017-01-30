import React, { Component } from 'react';
import Markdown from './Markdown';
import Signup from './Signup';
import Slideshow from './Slideshow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div data-uk-sticky className="uk-navbar-container tm-navbar-container" id="navbar">
            hali <a className="uk-button uk-button-primary" href="#projektjeink" data-uk-scroll>Projektjeink</a>
        </div> */}
{/* 
        <div data-uk-sticky="media: 960" className="uk-navbar-container tm-navbar-container uk-active" id="navbar">
          <div className="uk-container uk-container-expand">
            <nav className="uk-navbar">
              <div className="uk-navbar-left">
                <a href="../" className="uk-navbar-item uk-logo">
                  <img data-uk-svg="" src="../images/uikit-logo.svg" className="uk-margin-small-right" hidden="hidden" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 28 34" className="uk-margin-small-right" ratio="1">
                    <polygon fill="#fff" points="19.1,4.1 13.75,1 8.17,4.45 13.6,7.44 " />
  	                <path fill="#fff" d="M21.67,5.43l-5.53,3.34l6.26,3.63v9.52l-8.44,4.76L5.6,21.93v-7.38L0,11.7v13.51l13.75,8.08L28,25.21V9.07 L21.67,5.43z" />
                  </svg>
                  UIkit
                </a>
              </div>
              <div className="uk-navbar-right">
                <ul className="uk-navbar-nav uk-visible@m">
                  <li className="uk-active">
                    <a href="../docs/">Documentation</a>
                  </li>
                  <li>
                    <a href="../changelog">Changelog</a>
                  </li>
                </ul>
                <div className="uk-navbar-item uk-visible@m">
                  <a href="../download" className="uk-button uk-button-default tm-button-default uk-icon">
                  Download
                  <canvas data-uk-icon="icon: download" width="20" height="20" className="uk-icon" hidden="hidden" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" icon="download" width="20" height="20" ratio="1">
                    <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10" />
                    <rect x="3" y="17" width="13" height="1" />
                    <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3" />
                  </svg>
                </a>
              </div>
              <a data-uk-navbar-toggle-icon="" href="#offcanvas" data-uk-toggle="" className="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" ratio="1">
                <rect y="9" width="20" height="2" />
                <rect y="3" width="20" height="2" />
                <rect y="15" width="20" height="2" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div> */}

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
                  <Slideshow start={1} stop={8} />
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

        </div>

      </div>
    );
  }
}

export default App;
