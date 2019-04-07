import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';

import validate from '../../DRY_Functions/validate';

// Parent: <Route /> in <App />
class View3 extends Component {

	state = {
		supportRating: null
	}

	handleChange = ( e ) => {
		// update value of supportRating to match value of inputbox
		this.setState({ [ e.target.name ]: e.target.value })
	}

	//Click handler for Next button
	nextView = () => {
		console.log( 'validating:', this.state.supportRating );
		// User input validation (T/F value)
		let isValidInput = validate( this.state.supportRating, 'RATING' );
		if ( isValidInput === false ) {
			return;
		}

		// Create action for reducer
		const action = {
			type: 'SET_SUPPORT',
			payload: this.state.supportRating
		}
		// Dispatch action payload to reducer
		this.props.dispatch( action );
		// Change from current view to view2
		this.props.history.push( '/view4' );
	}

  render() {
    return (
			<div>
				<Header />
				<h2>How well are you being supported?</h2>
      	<label>Support?</label>
				<input
					placeholder="1-5"
					min={ 1 }
					max={ 5 }
					type="range"
					name="supportRating"
					onChange={ this.handleChange }
				></input>
				<button onClick={ this.nextView } >Next</button>
				<Review />
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect( mapReduxStateToProps )( View3 );
