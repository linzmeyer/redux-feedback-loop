import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';

// Parent: <Route /> in <App />
class View5 extends Component {

	componentDidMount = () => {
		// Create action for lastPage reducer
		const action = { type: 'SET_LAST_PAGE', payload: false };
		// Dispatch action payload to reducer
		this.props.dispatch( action );
	}

  render() {
    return (
			<div>
				<Header />
				<h2>Thank You For Your Feedback!</h2>
				<p>Click on a review item to change it.</p>
				<p>When you are ready, click Submit.</p>
				<Review postFeedback={this.props.postFeedback} />
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect( mapReduxStateToProps )( View5 );
