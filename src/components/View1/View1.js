import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

class View1 extends Component {
  render() {
    return (
      <div>
      	<Header />
      </div>
    );
  }
}

export default withRouter( View1 );
