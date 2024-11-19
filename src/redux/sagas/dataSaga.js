// src/redux/sagas/dataSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from '../reducers/actions';

const URL = "https://api.imgflip.com/get_memes"

function* fetchData() {
    try {
        //const response = yield call(fetch, 'https://api.example.com/data'); // Replace with your API
        
        const response = yield call(fetch, URL); // Replace with your API
        const data = yield response.json();
        yield put(fetchDataSuccess(data.data)); // Dispatch success action with data
    } catch (error) {
        yield put(fetchDataFailure(error.message)); // Dispatch failure action with error
    }
}

export function* watchFetchData() {
    yield takeEvery(FETCH_DATA_REQUEST, fetchData); // Watch for FETCH_DATA_REQUEST actions
}