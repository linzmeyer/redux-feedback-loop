import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';


// TODO: Make GET request

class Admin extends Component {

	componentDidMount = () => {
		this.props.getAllFeedback();
	}

	renderTableRow = () => {
		console.log(this.props.reduxState.allFeedback);
		return(
			<tr>

			</tr>
		);
	}

  render() {
    return (
			<div>
				<Header currentView="admin" />
				<h2>HELLO ADMIN</h2>
				<table>
					<thead>
						<tr>
							<th>Feeling</th>
							<th>Understanding</th>
							<th>Support</th>
							<th>Comments</th>
							<th>Date</th>
							<th>Flag For Further Review</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody id="viewKoalas">
						{ this.renderTableRow() }
					</tbody>
				</table>
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( Admin );
