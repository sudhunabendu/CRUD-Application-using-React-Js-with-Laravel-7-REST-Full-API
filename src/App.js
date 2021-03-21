import React, { Component } from 'react';

import { BrowserRouter, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Student from './components/students';

class App extends Component {
  render() {
    return (
      <div>
        <Student />
      </div>
    );
  }
}

export default App;
