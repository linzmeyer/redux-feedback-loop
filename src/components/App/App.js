import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
//import axios from 'axios';

import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import View1 from '../View1/View1';


class App extends Component {
  render() {
    return (
      <Router>
      	<Route exact path='/admin' component={Admin} />
				<Route exact path='/' component={Home} />
      	<Route exact path='/view1' component={View1} />

      </Router>
    );
  }
}

export default App;
