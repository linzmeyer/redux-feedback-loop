import React, { Component } from 'react';

import Header from '../Header/Header';

class Home extends Component {

	componentDidMount = () => {
		// call this get request to store data in reducer on home view mount
		this.props.getAllFeedback();
	}

  render() {
    return (
			<div>
				<Header currentView="home" />
				<h2>Take a moment to reflect on how we're doing here at prime.</h2>
				<p>Use the nav bar above to get started.</p>
			</div>
    );
  }
}

export default(Home);
