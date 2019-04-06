import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';

class View2 extends Component {
  render() {
    return (
			<Header />
    );
  }
}

export default withRouter( View2 );
