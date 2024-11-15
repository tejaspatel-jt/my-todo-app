import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserDetails = () => {

    const { id } = useParams();
    const location = useLocation();

    const { name, age } = location.state;

    const userData = location.state;

    return (
        <>
            <h1>User Details page</h1>

            <p> User id  : {id}</p>

            {/* Here, you can use the 'id' to fetch data or display specific content */}

            {name && age ? (
                <p> {name} is {age} years old</p>
            ) : (
                <p> No User data is provided </p>
            )}

            <h3> Simply show data without object destructuring</h3>

            { userData && userData.name && `User name is ${userData.name}`}{'\n'} and
            { userData && userData.age && `User age is ${userData.age}`}
        </>
    )
}

export default UserDetails