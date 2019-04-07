import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// import all components used in this component's render
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import View1 from '../View1/View1';
import View2 from '../View2/View2';
import View3 from '../View3/View3';
import View4 from '../View4/View4';
import View5 from '../View5/View5';

class App extends Component {
  render() {
    return (
      <Router>
      	<Route exact path='/admin' component={ Admin } />
				<Route exact path='/' component={ Home } />
      	<Route exact path='/view1' component={ View1 } />
      	<Route exact path='/view2' component={ View2 } />
      	<Route exact path='/view3' component={ View3 } />
      	<Route exact path='/view4' component={ View4 } />
      	<Route exact path='/view5' component={ View5 } />
      </Router>
    );
  }
}

export default App;
