import React, { Component } from 'react';
import Markdown from './Markdown';
import Signup from './Signup';
import './App.css';

class App extends Component {
  state = { diff: 0 };

  componentDidMount() {
    setInterval(this.tick.bind(this), 3000);
  }

  tick() {
    let diffy = this.state.diff;
    diffy++;
    this.setState({ diff: diffy });
  }

  renderSlideshow(min, max) {
    const val = (((min - 1) + this.state.diff) % (max)) + 1;
    console.log(val);
    const string = `/markdown/images/${val}.JPG`;
    return (
      <img className="slideshow" role="presentation" src={string} />
    );
  }

  render() {
    return (
      <div>
        <div data-uk-sticky className="uk-navbar-container tm-navbar-container" id="navbar">
            hali <a className="uk-button uk-button-primary" href="#projektjeink" data-uk-scroll>Projektjeink</a>
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
                {this.renderSlideshow(1, 8)}
              </div>
            </div>
          </div>

          <div id="kozosseg" className="uk-section uk-section-secondary uk-light">
            <div className="uk-container">
              <h3>Közösség</h3>
              <div>
                <Markdown path={'/markdown/kozosseg.md'} />
                {this.renderSlideshow(9, 12)}
              </div>
            </div>
          </div>

          <div id="kepzesunk" className="uk-section uk-section-muted">
            <div className="uk-container">
              <h3>Képzésünk</h3>
              <div>
                <Markdown path={'/markdown/kepzesunk.md'} />
                {this.renderSlideshow(13, 14)}
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
