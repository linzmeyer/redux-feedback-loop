import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

// import all components used in this component's render
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import View1 from '../View1/View1';
import View2 from '../View2/View2';
import View3 from '../View3/View3';
import View4 from '../View4/View4';
import View5 from '../View5/View5';

class App extends Component {

	// POST feedback
	postFeedback = ( feedbackData ) => {
		console.log('adding new feedback', feedbackData);
		// POST request
		axios({
			method: 'POST',
			url: '/feedback',
			data: feedbackData,
		})
		.then( (response) => {
			console.log('POST successful!');
			console.log(response.data)
		})
		.catch( (error) => {
			console.log('Error with post request', error);
			alert('Sorry, could not add the feedback. check console.');
		})
	}

  render() {
    return (
			// This gives these components react routes for SPA routing
			// Route for view5 is passing POST request to <View5 /> so it can
			//   be passed to
      <Router>
      	<Route exact path='/admin' component={ Admin } />
				<Route exact path='/' component={ Home } />
      	<Route exact path='/view1' component={ View1 } />
      	<Route exact path='/view2' component={ View2 } />
      	<Route exact path='/view3' component={ View3 } />
      	<Route exact path='/view4' component={ View4 } />
      	<Route
					exact path='/view5'
					render={
						( props ) => <View5 { ...props } postFeedback={ this.postFeedback } />
					}
				/>
      </Router>
    );
  }
}

export default (App);
