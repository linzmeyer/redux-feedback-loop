import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// TODO: Make GET request

class Admin extends Component {
  render() {
    return (
			<div>
				<h2>HELLO ADMIN</h2>
			</div>
    );
  }
}

export default withRouter(Admin);
