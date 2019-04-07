import React, { Component } from 'react';

class Home extends Component {

	linkToView1 = () => {
		alert( 'changing to view1' );
		console.log(this.props);
		this.props.history.push('/view1')
		console.log(this.props);
	}

	linkToAdmin = () => {
		this.props.history.push('/admin')
	}

  render() {
    return (
			<div>
				<nav>
					<div className='navbar' onClick={ this.linkToView1 } >Leave New Feedback</div>
					<div className='navbar' onClick={ this.linkToAdmin } >Admin</div>
				</nav>
			</div>
    );
  }
}

export default(Home);
