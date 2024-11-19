// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Import the root reducer
import rootSaga from './sagas'; // Import the root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer, // Set the root reducer
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware), // Add saga middleware
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;