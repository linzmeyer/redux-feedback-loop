import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from '../Header/Header';

// Parent: <Route /> in <App />
class Admin extends Component {

	// DELETE request deletes item from database
  deleteFeedbackItem = ( id ) => {
    axios({
      method: 'Delete',
      url: `/feedback/delete/${id}`,
    })
    .then( ( response ) => {
      // getting the new list will trigger the page to render again.
      this.props.getList();
    })
    .catch( (error) => {
      console.log('Error deleting data', error);
      alert('Sorry, could not delete the item. Check console.');
    })
  }

	renderTableRow = () => {
		return(
			this.props.reduxState.allFeedback.map(
				feedbackItem => (
					<tr key={ feedbackItem.id } >
						<td>{feedbackItem.feeling}</td>
						<td>{feedbackItem.understanding}</td>
						<td>{feedbackItem.support}</td>
						<td>{feedbackItem.comments}</td>
						<td>{feedbackItem.date}</td>
						<td>
							<button
								className="btn btn-outline-warning"
							>Flag</button>
						</td>
						<td>
							<button
								onClick={ this.deleteFeedbackItem }
								className="btn btn-danger"
							>Delete</button>
						</td>
					</tr>
				)
			)
		);
	}

  render() {
    return (
			<div>
				<Header currentView="admin" />
				<h2>Here's how your students are doing</h2>
				<table className="table table-hover" >
					<thead>
						<tr>
							<th scope="col" >Feeling</th>
							<th scope="col" >Understanding</th>
							<th scope="col" >Support</th>
							<th scope="col" >Comments</th>
							<th scope="col" >Date</th>
							<th scope="col" >Flag For Further Review</th>
							<th scope="col" >Delete</th>
						</tr>
					</thead>
					<tbody>
						{ this.renderTableRow() }
					</tbody>
				</table>
			</div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({ reduxState });

export default connect( mapReduxStateToProps )( Admin );
