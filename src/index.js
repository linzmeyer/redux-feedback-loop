import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import './index.css';
import App from './components/App/App';

// allFeedback should be an array of objects sent from server
const allFeedback = ( state = null, action ) => {
	if ( action.type === 'SET_ALL_FEEDBACK' ) {
		return action.payload
	}
	return state;
}

const comment = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_COMMENT' ) {
		return action.payload;
	}
	else if ( action.type === 'RESET-REVIEW' ) {
		return action.payload.answer;
	}
	return state;
}

const feeling = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_FEELING' ) {
		return action.payload;
	}
	else if ( action.type === 'RESET-REVIEW' ) {
		return action.payload.answer;
	}
	return state;
}

// Holds the values of all feedback values
const review = ( state = { answer: 'unanswered' }, action ) => {
	if ( action.type === 'SET_REVIEW' ) {
		state = action.payload;
	}
	else if ( action.type === 'RESET-REVIEW' ) {
		state = action.payload;
	}
	return state;
}

const support = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_SUPPORT' ) {
		return action.payload;
	}
	else if ( action.type === 'RESET-REVIEW' ) {
		return action.payload.answer;
	}
	return state;
}

const understanding = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_UNDERSTANDING' ) {
		return action.payload;
	}
	else if ( action.type === 'RESET-REVIEW' ) {
		return action.payload.answer;
	}
	return state;
}

// This stores our reducers within the global scope of <Provider />
const storeInstance = createStore(
	// This puts all individual reducers into one object.
	combineReducers({
		allFeedback,
		comment,
		feeling,
		review,
		support,
		understanding,
	}),
	// This gives us the ability to track dispatches in client console.
	applyMiddleware(logger),
);

// Wrap the entire App component with <Provider />
ReactDOM.render(
	// This method adds the first argument to the second argurment
	<Provider store={storeInstance} ><App /></Provider>,
	document.getElementById('root')
);

registerServiceWorker();
