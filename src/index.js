import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App/App';
import { logger } from 'redux-logger';

// This will store our reducers within the global scope of <Provider />
const storeInstance = createStore(
	// This puts all of our separate reducers into one object.
	combineReducers({

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
