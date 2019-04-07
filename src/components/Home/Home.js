import React, { Component } from 'react';

class Home extends Component {

	linkToView1 = () => {
		this.props.history.push('/view1')
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
