// src/redux/reducers/todo.reducer.js
import { 
    FETCH_TODOS_REQUEST, 
    FETCH_TODOS_SUCCESS, 
    FETCH_TODOS_FAILURE, 
    CREATE_TODO_REQUEST, 
    CREATE_TODO_SUCCESS, 
    CREATE_TODO_FAILURE, 
    UPDATE_TODO_REQUEST, 
    UPDATE_TODO_SUCCESS, 
    UPDATE_TODO_FAILURE, 
    DELETE_TODO_REQUEST, 
    DELETE_TODO_SUCCESS, 
    DELETE_TODO_FAILURE 
} from './todo.actions';

const initialState = {
    todos: [],
    error: null,
};

const todoReducer = (state = initialState, action) => {
    console.log("hello ",action.payload);
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                error: null, // Clear any previous errors when fetching starts
            };
        case FETCH_TODOS_SUCCESS:
            return {
                todos: action.payload, // Update state with fetched todos
                error: null, // Clear any previous errors
            };
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                error: action.payload, // Set error message
            };
        case CREATE_TODO_REQUEST:
            return {
                ...state,
                error: null, // Clear any previous errors when creating starts
            };
        case CREATE_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload], // Add new todo to the list
                error: null,
            };
        case CREATE_TODO_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case UPDATE_TODO_REQUEST:
            return {
                ...state,
                error: null, // Clear any previous errors when updating starts
            };
        case UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? action.payload : todo // Update the specific todo
                ),
                error: null,
            };
        case UPDATE_TODO_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case DELETE_TODO_REQUEST:
            return {
                ...state,
                error: null, // Clear any previous errors when deleting starts
            };
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload), // Remove the deleted todo
                error: null,
            };
        case DELETE_TODO_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state; // Return current state for unhandled actions
    }
};

export default todoReducer;