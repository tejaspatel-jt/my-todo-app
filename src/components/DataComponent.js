// src/components/DataComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../redux/reducers/actions';

const DataComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data); // Access data from the Redux store
    console.log('data in DataComponent = ', data);
    const error = useSelector(state => state.data.error); // Access error from the Redux store

    useEffect(() => {
        dispatch(fetchDataRequest()); // Dispatch action to fetch data
    }, [dispatch]);

    return (
        <div>
            {error && <p>Error: {error}</p>} {/* Display error if exists */}
            <ul>
                {data.data?.memes && data.data.memes.map(item => (
                    <>
                        <li key={item.id}>{item.name}</li>
                        <img style={{ height: 300, border: '1px solid black' }} src={item.url} alt={item.name} />
                    </>
                ))}
                {/* {data.map(item => (
                    <li key={item.id}>{item.name}</li> // Render fetched data
                ))} */}
            </ul>
        </div>
    );
};

export default DataComponent;