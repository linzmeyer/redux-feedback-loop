import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';

import validate from '../../DRY_Functions/validate';

// Parent: <Route /> in <App />
class View2 extends Component {

	state = {
		understandingRating: null
	}

	handleChange = (e) => {
		// update value of understandingRating to match value of inputbox
		this.setState({ [e.target.name]: e.target.value })
	}

	//Click handler for Next button
	nextView = () => {
		console.log( 'validating:', this.state.understandingRating );
		// User input validation (returns T/F value)
		let isValidInput = validate( this.state.understandingRating, 'RATING' );
		if ( isValidInput === false ) {
			return;
		}

		// Create action for reducer
		const action = {
			type: 'SET_UNDERSTANDING',
			payload: this.state.understandingRating
		}
		// Dispatch action payload to reducer
		this.props.dispatch( action );
		// Change from current view to view2
		this.props.history.push( '/view3' );
	}

  render() {
    return (
			<div>
				<Header />
				<h2>How well are you understanding the content?</h2>
      	<label>Understanding?</label>
				<input
					placeholder="1-5"
					min={1}
					max={5}
					type="number"
					name="understandingRating"
					onChange={this.handleChange}
					className="in"
				></input>
				<button onClick={this.nextView} className="btn btn-primary" >Next</button>
				<Review />
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( View2 );
