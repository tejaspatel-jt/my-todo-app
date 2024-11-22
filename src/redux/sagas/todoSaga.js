// src/redux/sagas/todoSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { 
    FETCH_TODOS_REQUEST, 
    CREATE_TODO_REQUEST, 
    UPDATE_TODO_REQUEST, 
    DELETE_TODO_REQUEST, 
    fetchTodosSuccess, 
    fetchTodosFailure, 
    createTodoSuccess, 
    createTodoFailure, 
    updateTodoSuccess, 
    updateTodoFailure, 
    deleteTodoSuccess, 
    deleteTodoFailure 
} from '../reducers/todo.actions';
import * as api from '../../api/apiClient'; // Import the API service

// Fetch Todos
function* fetchTodos() {
    try {
        const response = yield call(api.fetchTodos); // Call the API service
        yield put(fetchTodosSuccess(response.data)); // Dispatch success action with data
    } catch (error) {
        yield put(fetchTodosFailure(error.message)); // Dispatch failure action with error
    }
}

// Create Todo
function* createTodo({ payload }) {
    try {
        const response = yield call(api.createTodo, payload); // Call the API service
        yield put(createTodoSuccess(response.data)); // Dispatch success action with data
    } catch (error) {
        yield put(createTodoFailure(error.message)); // Dispatch failure action with error
    }
}

// Update Todo
function* updateTodo({ payload }) {
    try {
        const { id, todo } = payload;
        const response = yield call(api.updateTodo, id, todo); // Call the API service
        yield put(updateTodoSuccess(response.data)); // Dispatch success action with data
    } catch (error) {
        yield put(updateTodoFailure(error.message)); // Dispatch failure action with error
    }
}

// Delete Todo
function* deleteTodo({ payload }) {
    try {
        const { id } = payload;
        yield call(api.deleteTodo, id); // Call the API service
        yield put(deleteTodoSuccess(id)); // Dispatch success action with id
    } catch (error) {
        yield put(deleteTodoFailure(error.message)); // Dispatch failure action with error
    }
}

// Watcher Saga
export function* watchTodos() {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
    yield takeEvery(CREATE_TODO_REQUEST, createTodo);
    yield takeEvery(UPDATE_TODO_REQUEST, updateTodo);
    yield takeEvery(DELETE_TODO_REQUEST, deleteTodo);
}