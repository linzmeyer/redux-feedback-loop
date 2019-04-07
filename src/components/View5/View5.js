import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';

// Parent: <Route /> in <App />
class View5 extends Component {

	//Click handler for Return Home button
	nextView = () => {
		// Bring user back to home page
		this.props.history.push( '/' );

		// Create action for reducer
		const action = {
			type: 'SET_LAST_PAGE',
			payload: false
		}
		// Dispatch action payload to reducer
		this.props.dispatch( action );
		// Change from current view to view2
		this.props.history.push( '/' );

	}

  render() {
    return (
			<div>
				<Header />
				<h2>Thank You For Your Feedback!</h2>
				<button onClick={ this.nextView } >Return Home</button>
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect( mapReduxStateToProps )( View5 );
