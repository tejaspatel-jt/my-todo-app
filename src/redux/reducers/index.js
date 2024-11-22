// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import todoReducer from './todo.reducer';

// Combine all reducers into a root reducer
const rootReducer = combineReducers({

    data: dataReducer, 
    todo: todoReducer, // Add your todo reducer here
});

export default rootReducer;