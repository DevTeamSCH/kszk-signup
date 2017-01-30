import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import { First, Second, Third, Fourth, Success, Error } from './steps';

//this.props.addToData({ interest: ['egy', 'ketto'] });

class Signup extends Component {
  state = { step: 0, name: '', mail: '', date: true, text: '', interest: [] };
  componentWillMount() {
      const config = {
        apiKey: 'AIzaSyBcO61362fgzXHuK2Fji5-Vs7H-n-6yyAI',
        authDomain: 'kszk-signup.firebaseapp.com',
        databaseURL: 'https://kszk-signup.firebaseio.com',
        storageBucket: 'kszk-signup.appspot.com',
        messagingSenderId: '852453367525'
      };

      firebase.initializeApp(config);
  }

  getState() {
    switch (this.state.step) {
      case 0:
        return (
          <First
            next={this.next.bind(this)}
            addToData={this.addData.bind(this)}
            data={this.state}
          />
        );
      case 1:
        return (
          <Second
            next={this.next.bind(this)}
            prev={this.prev.bind(this)}
            data={this.state}
            addToData={this.addData.bind(this)}
          />
        );
      case 2:
        return (
          <Third
            next={this.next.bind(this)}
            prev={this.prev.bind(this)}
            data={this.state}
            addToData={this.addData.bind(this)}
          />
        );
      case 3:
        return (
          <Fourth
            upload={this.uploadData.bind(this)}
            prev={this.prev.bind(this)}
            addToData={this.addData.bind(this)}
            data={this.state}
          />
        );
      case 4:
        return (
          <Success
            data={this.state}
            addToData={this.addData.bind(this)}
          />
        );
      default:
        return (<Error addToData={this.addData.bind(this)} />);
    }
  }

  next() {
    const nextState = this.state.step + 1;
    this.setState({ step: nextState });
  }

  prev() {
    const prevState = this.state.step - 1;
    this.setState({ step: prevState });
  }

  addData(data) {
    const state = { ...this.state, ...data };
    this.setState(state);
  }

  uploadData() {
    const { name, mail, interest, date, text } = this.state;
    firebase.database().ref('/rookies')
      .push({ name, mail, interest, date, text })
      .then(() => {
        this.setState({ step: 4 });
      })
      .catch(() => {
        this.setState({ step: 5 });
      }
    );
  }

  render() {
    return (
      <div className="uk-card uk-card-default">
        <div className="uk-card-header">
          <div className="uk-flex-middle">
            <div className="uk-width-auto">
              <progress className="uk-progress" value={this.state.step} max="3" />
            </div>
          </div>
        </div>
        {this.getState()}
      </div>
    );
  }
}

export default Signup;
