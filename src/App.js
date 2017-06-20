import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Reset.css';
import './App.css';
import './Main.css';
import './Beaches.css';
import MainContainer from './components/MainContainer';
import NavContainer from './components/NavContainer';
import BeachesContainer from './components/BeachesContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavContainer />

          <Route exact path="/" component={MainContainer}/>
          <Route exact path="/beaches" component={BeachesContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
