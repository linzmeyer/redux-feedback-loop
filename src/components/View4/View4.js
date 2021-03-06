import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';
import './View4.css';

import validate from '../../DRY_Functions/validate';

// Parent: <Route /> in <App />
class View4 extends Component {

	state = {
		commentDetails: null,
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

		// Create action for comment reducer
		const action1 = { type: 'SET_COMMENT', payload: this.state.commentDetails }
		// Dispatch action payload to comment reducer
		this.props.dispatch( action1 );

		// Create action for comment reducer
		const action2 = { type: 'SET_LAST_PAGE', payload: true }
		// Dispatch action payload to comment reducer
		this.props.dispatch( action2 );

		// Change from current view to view2
		this.props.history.push( '/view5' );
	}

  render() {
    return (
			<div className="View4" >
				<Header />
				<h2>Any comments you want to leave?</h2>
      	<label className="comments" >Comments</label>
				<textarea
					placeholder="What's up?"
					min={ 1 }
					max={ 5 }
					name="commentDetails"
					onChange={ this.handleChange }
					className="form-control"
				></textarea>
				<button onClick={ this.nextView } className="btn btn-primary next text-center" >Next</button>
				<Review />
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( View4 );
