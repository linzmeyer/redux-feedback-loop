import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';

class View1 extends Component {

	state = {
		newFeedback: {
			feelingRating: null
		}
	}

	handleChange = (e) => {
		// update value of feelingRating to match value of inputbox
		this.setState({
			newFeedback: { [e.target.name]: e.target.value }
		})
		console.log(this.state.newFeedback.feelingRating);
		console.log(e.target.value);
	}

	//Click handler for Next button
	nextView = () => {
		console.log(this.state.newFeedback.feelingRating);

		// TODO: dispatch feelingRating to reducer

		// TODO: send user to next view
		this.props.history.push('/view2');
	}

  render() {
		console.log('render');
    return (
      <div>
      	<Header />
      	<h2>How are you feeling today?</h2>
      	<label>Feeling?</label>
				<input
					placeholder="1-5"
					min={1}
					max={5}
					type="number"
					name="feelingRating"
					onChange={this.handleChange}
				></input>
    		<button onClick={this.nextView} >Next</button>
      </div>
    );
  }
}

export default withRouter( View1 );
