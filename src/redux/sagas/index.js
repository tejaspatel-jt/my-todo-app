// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';
import { watchFetchData } from './dataSaga';
import { watchTodos } from '../sagas/todoSaga';

export default function* rootSaga() {
    yield all([

        // Combine all sagas here

        watchFetchData(), 
        watchTodos(), 
    ]);
}