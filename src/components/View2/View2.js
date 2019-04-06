import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Review from '../Review/Review';

class View2 extends Component {
  render() {
    return (
			<div>
				<Header />
				<Review />
			</div>
    );
  }
}

export default( View2 );
