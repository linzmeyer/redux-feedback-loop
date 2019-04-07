import React, { Component } from 'react';
import { connect } from 'react-redux';

// This component will render every time a props value changes
class Review extends Component {

	componentDidMount = () => {
		// set the values of review reducer
		const action = {
			type: 'SET_REVIEW',
			payload: {
				feeling: this.props.reduxState.feeling,
				understanding: this.props.reduxState.understanding,
				support: this.props.reduxState.support,
				comments: this.props.reduxState.comment,
			}
		};
		// Dispatch action payload to review reducer
		this.props.dispatch( action );
	}

	isReady = ( feedback ) => {
		// Returns an array of object's property values
		let feedbackAnswers = Object.values( feedback );
		// Loop through all answers in array of feedback answers
		for ( let answer of feedbackAnswers ) {
			if ( answer === 'unanswered' ) {
				console.log('there is some feedback value that is unanswered');
				return false;
			}
		}
		// Return true if all answers have a different value than 'unanswered'
		return true;
	}

	renderButton() {
		// Check if feedback reducer is complete and store in feedbackIsReady
		let feedbackIsReady = this.isReady( this.props.reduxState.review );
		// if feedback is completed
		if ( feedbackIsReady === true ) {
			// Render clickable button to make POST request
			return ( <button onClick={ this.postFeedback } >Submit</button> );
		}// if feedback isn't completed
		else {
			// Render faded, disabled button
			return <button disabled="disabled" >Incomplete</button>
		}
	}

	postFeedback = () => {
		// Make post request using reducer that conatains all review values
		this.props.postFeedback( this.props.reduxState.review );
	}

  render() {
    return (
			<div>
				<h2>Review Your Feedback</h2>
				<p>Feeling: { this.props.reduxState.feeling }</p>
				<p>Understanding: { this.props.reduxState.understanding }</p>
				<p>Support: { this.props.reduxState.support }</p>
				<p>Comments: { this.props.reduxState.comment }</p>
				{ this.renderButton() }
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( Review );
