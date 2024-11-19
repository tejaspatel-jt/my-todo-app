// src/redux/reducers/dataReducer.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

const initialState = {
    data: [],
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload, // Update state with fetched data
                error: null, // Clear any previous errors
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload, // Set error message
            };
        default:
            return state; // Return current state for unhandled actions
    }
};

export default dataReducer;