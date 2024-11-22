// src/redux/reducers/todo.actions.js
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

// Action Creators
export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (data) => ({ type: FETCH_TODOS_SUCCESS, payload: data });
export const fetchTodosFailure = (error) => ({ type: FETCH_TODOS_FAILURE, payload: error });

export const createTodoRequest = (todo) => ({ type: CREATE_TODO_REQUEST, payload: todo });
export const createTodoSuccess = (data) => ({ type: CREATE_TODO_SUCCESS, payload: data });
export const createTodoFailure = (error) => ({ type: CREATE_TODO_FAILURE, payload: error });

export const updateTodoRequest = (id, todo) => ({ type: UPDATE_TODO_REQUEST, payload: { id, todo } });
export const updateTodoSuccess = (data) => ({ type: UPDATE_TODO_SUCCESS, payload: data });
export const updateTodoFailure = (error) => ({ type: UPDATE_TODO_FAILURE, payload: error });

export const deleteTodoRequest = (id) => ({ type: DELETE_TODO_REQUEST, payload: { id } });
export const deleteTodoSuccess = (id) => ({ type: DELETE_TODO_SUCCESS, payload: id });
export const deleteTodoFailure = (error) => ({ type: DELETE_TODO_FAILURE, payload: error });