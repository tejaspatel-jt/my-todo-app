// src/redux/sagas/index.js
import { all } from 'redux-saga/effects';
import { watchFetchData } from './dataSaga';

export default function* rootSaga() {
    yield all([
        watchFetchData(), // Combine all sagas here
    ]);
}