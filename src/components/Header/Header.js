import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

// Parents: <View1-5 />
class Header extends Component {

	renderHeader = ( view ) => {
		if ( view === 'admin' ) {
			return ( <h3>ADMIN</h3> );
		}
		else if ( view === 'home' ) {
			return ( <h3>HOME</h3> );
		}
		else if ( view === 'view5' ) {
			return (
				<div>
					<h4><i>Thank You!</i></h4>
				</div>
			);
		}
		else {
			return (
				<div>
					<h4><i>Don't forget it!</i></h4>
				</div>
			);
		}
	}

  render() {
    return (
			<header className="Header" >
				<h1>Feedback!</h1>
				{ this.renderHeader( this.props.currentView ) }
				<Navbar currentView={ this.props.currentView } />
			</header>
    );
  }
}

export default( Header );
