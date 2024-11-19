// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer'; // Import your data reducer

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
    data: dataReducer, // Add your data reducer here
});

export default rootReducer;