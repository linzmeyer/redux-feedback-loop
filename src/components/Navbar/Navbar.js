import React, { Component } from 'react';
import { connect } from 'react-redux';

// This component is not a direct child of a <Route />,
// so withRouter is required to use this.props.history.push() for react routing
import { withRouter } from 'react-router-dom';

import './Navbar.css';

// Parent: <Header />
class NavBar extends Component {

	// Click handlers that route the user
	routeToAdmin = () => { this.props.history.push( '/admin' ) }
	routeToHome = () => { this.props.history.push( '/' ) }
	routeToView1 = () => { this.props.history.push( '/view1' ) }
	routeToView2 = () => { this.props.history.push( '/view2' ) }
	routeToView3 = () => { this.props.history.push( '/view3' ) }
	routeToView4 = () => { this.props.history.push( '/view4' ) }
	routeToView5 = () => { this.props.history.push( '/view5' ) }

	// Checks to see if user has started by checking if any values of feedback
	// reducer have changed
	isStarted = ( feedback ) => {
		// Returns an array of object's property values
		let feedbackAnswers = Object.values( feedback );
		// Loop through all answers in array of feedback answers
		for ( let answer of feedbackAnswers ) {
			if ( answer !== 'unanswered' ) {
				// Return false if any answers have not changed from default state
				return true;
			}
		}
		// Return true if any answers have a different value than 'unanswered'
		return false;
	}

/*
	CONDITIONAL RENDER
	Depending on what view the users are currently in, they should be able to
	navigate to different views without disrupting the data of their feedback
	during their session. The conditional render affects only the navigation bar.
*/
	renderNavBar = ( view ) => {
		// if current view is admin view
		if ( view === 'admin' ) {
			return (
				<div className="Navbar" onClick={ this.routeToHome } >Back To Home</div>
			);
		}
		// if current view is home view
		else if ( view === 'home' ) {
			// Check if feedback reducer has changes (returns T/F value)
			let feedbackIsStarted = this.isStarted( this.props.reduxState.review );
			// if feedback has any progress
			if ( feedbackIsStarted === true ) {
				// Render option to continue feedback
				return (
					<div>
						<div className="Navbar" onClick={ this.routeToAdmin } >Admin</div>
						<div className="Navbar" onClick={ this.routeToView1 } >Continue Feedback</div>
					</div>
				);
			}
			// if feedback has no progress
			else {
				// Render render option to Start Feedback
				return (
					<div>
						<div className="Navbar" onClick={ this.routeToAdmin } >Admin</div>
						<div className="Navbar" onClick={ this.routeToView1 } >Start Feedback</div>
					</div>
				);
			}
		}
		// if current view is any other view listed in App.js
		else {
			return (
				<div>
					<div className="Navbar" onClick={ this.routeToHome } >Home</div>
					<div className="Navbar" onClick={ this.routeToView1 } >Feeling</div>
					<div className="Navbar" onClick={ this.routeToView2 } >Understanding</div>
					<div className="Navbar" onClick={ this.routeToView3 } >Support</div>
					<div className="Navbar" onClick={ this.routeToView4 } >Comments</div>
					<div className="Navbar" onClick={ this.routeToView5 } >Submit</div>
				</div>
			);
		}
	}

  render() {
    return (
			<nav>
				{ this.renderNavBar( this.props.currentView ) }
			</nav>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

// This uses connect for redux and withRouter for react routing.
export default connect( mapReduxStateToProps )(withRouter( NavBar ));
