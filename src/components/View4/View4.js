import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';

import validate from '../../DRY_Functions/validate';

// Parent <Route /> in <App />
class View4 extends Component {

	state = {
		commentDetails: null
	}

	handleChange = ( e ) => {
		// update value of commentDetails to match value of inputbox
		this.setState({ [ e.target.name ]: e.target.value })
	}

	//Click handler for Next button
	nextView = () => {
		console.log( 'validating:', this.state.commentDetails );
		// User input validation (T/F value)
		let isValidInput = validate( this.state.commentDetails, 'RATING' );
		if ( isValidInput === false ) {
			return;
		}

		// Create action for reducer
		const action = {
			type: 'SET_COMMENT',
			payload: this.state.commentDetails
		}
		// Dispatch action payload to reducer
		this.props.dispatch( action );
		// Change from current view to view2
		this.props.history.push( '/view5' );
	}

  render() {
    return (
			<div>
				<Header />
				<h2>Any comments you want to leave?</h2>
      	<label>Comments</label>
				<textarea
					placeholder="What's up?"
					min={ 1 }
					max={ 5 }
					name="commentDetails"
					onChange={ this.handleChange }
				></textarea>
				<button onClick={ this.nextView } >Next</button>
				<Review />
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect( mapReduxStateToProps )( View4 );
