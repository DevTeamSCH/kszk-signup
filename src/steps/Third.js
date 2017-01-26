import React, { Component } from 'react';

class Third extends Component {
  componentWillMount() {
    const { date, text } = this.props.data;
    this.setState({ coming: date, text });
  }

  isComing() {
    let come = this.state.coming;
    come = !come;
    this.setState({ coming: come });
  }

  textTypes(event) {
    this.setState({ text: event.target.value });
  }

  next() {
    this.props.addToData({ date: this.state.coming, text: this.state.text });
    this.props.next();
  }

  prev() {
    this.props.addToData({ date: this.state.coming, text: this.state.text });
    this.props.prev();
  }

  render() {
    return (
      <div>
        <div className="uk-card-body">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="Third">
                Az időpont megfelel
              </label>
              <div className="uk-form-controls">
                <label>
                  <input
                    onChange={this.isComing.bind(this)}
                    className="uk-radio"
                    type="radio"
                    name="coming"
                    checked={this.state.coming}
                  /> Igen
                </label>
                <br />
                <label>
                  <input
                    onChange={this.isComing.bind(this)}
                    className="uk-radio"
                    type="radio"
                    name="coming"
                    checked={!this.state.coming}
                  /> Nem
                </label>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="Third">
                Üzenj nekünk
              </label>
              <textarea
                onChange={this.textTypes.bind(this)}
                value={this.state.text}
                className="uk-textarea"
                rows="5"
                placeholder="Üzenet"
              />
            </div>
          </form>
        </div>

        <div className="uk-card-footer">
          <button
            className="uk-margin-remove uk-button uk-button-secondary uk-align-left"
            onClick={this.prev.bind(this)}
          >
            <span data-uk-icon="icon: chevron-left" />
          </button>
          <button
            className="uk-margin-remove uk-button uk-button-primary uk-align-right"
            onClick={this.next.bind(this)}
          >
            <span data-uk-icon="icon: chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export { Third };
