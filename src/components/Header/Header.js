import React, { Component } from 'react';
import './Header.css';

// Parents: <View1-5 />
class Header extends Component {

	renderHeader = () => {
		if ( this.props.lastPage === true ) {
			return ( <h1>Feedback!</h1> );
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
				{ this.renderHeader() }
			</header>
    );
  }
}

export default Header;
