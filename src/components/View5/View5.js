import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Review from '../Review/Review';

// Parent: <Route /> in <App />
class View5 extends Component {

  render() {
    return (
			<div>
				<Header currentView='view5' />
				<h2>Thank You For Your Feedback!</h2>
				<p>Use the above nav bar to change your answers</p>
				<p>Once you've completed all answers, click the submit button below.</p>
				<Review postFeedback={this.props.postFeedback} />
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( View5 );
