import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import { First, Second, Third, Fourth } from './steps';

//this.props.addToData({ interest: ['egy', 'ketto'] });

class Signup extends Component {
  state = { step: 1, name: '', mail: '', interest: [], date: false, text: '' };
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

  uploadData() {
    const { name, mail, interest, date, text } = this.state;
    firebase.database().ref('/rookies')
      .push({ name, mail, interest, date, text })
      .then(() => {
        this.setState({ step: 1, name: '', mail: '', interest: [], date: false, text: '' });
      });
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

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <First
            next={this.next.bind(this)}
            addToData={this.addData.bind(this)}
            data={this.state}
          />
        );
      case 2:
        return (
          <Second
            next={this.next.bind(this)}
            prev={this.prev.bind(this)}
            data={this.state}
            addToData={this.addData.bind(this)}
          />
        );
      case 3:
        return (
          <Third
            next={this.next.bind(this)}
            prev={this.prev.bind(this)}
            data={this.state}
            addToData={this.addData.bind(this)}
          />
        );
      case 4:
        return (
          <Fourth
            upload={this.uploadData.bind(this)}
            prev={this.prev.bind(this)}
            data={this.state}
          />
        );
      default:
        return;
    }
  }
}

export default Signup;
