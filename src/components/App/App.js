import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
//import axios from 'axios';

import View1 from '../View1/View1';
//import Home from '../Home/Home';

//import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

      	<Route exact path='/view-1' component={View1} />
      </Router>
    );
  }
}

export default App;
