import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import './index.css';
import App from './components/App/App';

const comment = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_COMMENT' ) {
		return action.payload;
	}
	return state;
}

const feeling = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_FEELING' ) {
		return action.payload;
	}
	return state;
}

// the default value is FALSE
const lastPage = ( state = 'false', action ) => {
	if ( action.type === 'SET_LAST_PAGE' ) {
		// change value to true;
	state = action.payload;
	}
	return state;
}

const support = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_SUPPORT' ) {
		return action.payload;
	}
	return state;
}

const understanding = ( state = 'unanswered', action ) => {
	if ( action.type === 'SET_UNDERSTANDING' ) {
		return action.payload;
	}
	return state;
}

// This stores our reducers within the global scope of <Provider />
const storeInstance = createStore(
	// This puts all individual reducers into one object.
	combineReducers({
		comment,
		feeling,
		lastPage,
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
