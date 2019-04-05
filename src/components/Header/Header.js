import React, { Component } from 'react';
import axios from 'axios';
import './Header.css';

class Header extends Component {
  render() {
    return (
			<div>
        <header className="Header">
          <h1>Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
      </div>
    );
  }
}

export default Header;
