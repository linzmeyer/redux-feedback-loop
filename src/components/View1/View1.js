import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';

import validate from '../../DRY_Functions/validate';

// Parent: <Route /> in <App />
class View1 extends Component {

	state = {
			feelingRating: null
	}

	// update value of feelingRating to match value of inputbox
	handleChange = ( e ) => {
		this.setState({ [ e.target.name ]: e.target.value })
	}

	//Click handler for Next button
	nextView = () => {
		console.log( 'validating:', this.state.feelingRating );
		// User input validation (returns T/F value)
		let isValidInput = validate( this.state.feelingRating, 'RATING' );
		if ( isValidInput === false ) {
			return;
		}
		// Create action for reducer
		const action = { type: 'SET_FEELING', payload: this.state.feelingRating }
		// Dispatch action payload to reducer
		this.props.dispatch( action );
		// Change from current view to view2
		this.props.history.push( '/view2' );
	}

  render() {
    return (
      <div>
      	<Header />
      	<h2>How are you feeling today?</h2>
      	<label>Feeling?</label>
				<input
					placeholder="1-5"
					min={ 1 }
					max={ 5 }
					type="number"
					name="feelingRating"
					onChange={ this.handleChange }
				></input>
    		<button onClick={ this.nextView } >Next</button>
    		<Review />
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( View1 );
