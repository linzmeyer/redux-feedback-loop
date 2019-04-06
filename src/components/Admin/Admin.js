import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


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
