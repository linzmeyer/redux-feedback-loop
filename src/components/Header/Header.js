import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

// Parents: <View1-5 />
class Header extends Component {

	renderHeader = ( view ) => {
		if ( view === 'view5' ) {
			return (
				<div>
					<h1>Feedback!</h1>
					<h4><i>Thank You!</i></h4>
				</div>
			);
		}
		else {
			return (
				<div>
					<h1>Feedback!</h1>
					<h4><i>Don't forget it!</i></h4>
				</div>
			);
		}
	}

  render() {
    return (
			<header className="Header" >
				{ this.renderHeader( this.props.currentView ) }
				<Navbar currentView={ this.props.currentView } />
			</header>
    );
  }
}

export default( Header );
