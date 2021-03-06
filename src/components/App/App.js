import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
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

	// GET all feedback and dispatch to reducer for easy access
	getAllFeedback = () => {
		axios({
			method: 'GET',
			url: '/feedback'
		}).then( ( response ) => {
			console.log( response.data );
			// Store response in reducer
			const action = { type: 'SET_ALL_FEEDBACK', payload: response.data }
			this.props.dispatch( action );
		});
	}

	// POST feedback
	postFeedback = ( feedbackData ) => {
		console.log( 'adding new feedback', feedbackData );
		// POST request
		axios({
			method: 'POST',
			url: '/feedback',
			data: feedbackData,
		})
		.then( (response) => {
			console.log( 'POST successful!' );
			console.log( response.data );
			this.getAllFeedback();
		})
		.catch( ( error ) => {
			console.log( 'Error with post request', error );
			alert( 'Sorry, could not add the feedback. check console.' );
		})
	}

  render() {
    return (
			// This gives these components react routes for SPA routing.
			// Route with props are passing requests so they can handle requests from
			// components that use them.
      <Router>
      	<Route exact path='/admin'
					render={ (props) => <Admin {...props} getAllFeedback={this.getAllFeedback}/> }
      	/>
				<Route exact path='/'
					render={ (props) => <Home {...props} getAllFeedback={this.getAllFeedback}/> }
				/>
      	<Route exact path='/view1' component={ View1 } />
      	<Route exact path='/view2' component={ View2 } />
      	<Route exact path='/view3' component={ View3 } />
      	<Route exact path='/view4' component={ View4 } />
      	<Route exact path='/view5'
					render={ (props) => <View5 {...props} postFeedback={this.postFeedback}/> }
				/>
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( App );
