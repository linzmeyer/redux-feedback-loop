import React, { Component } from 'react';
import Header from '../Header/Header';


// TODO: Make GET request

class Admin extends Component {


componentDidMount = () => {
	this.props.getAllFeedback();
}

  render() {
    return (
			<div>
				<Header currentView="admin" />
				<h2>HELLO ADMIN</h2>
			</div>
    );
  }
}

export default(Admin);
