import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Users = () => {

    const navigate = useNavigate();

    const handleNavigation = () => {

        // Navigate to /user/4 and pass data as state
        navigate('/user/4',{
            state : {
                name : 'User 4',
                age : 30
            },
        })
    }

    return (
        <>
            <h1>Users Listing</h1>

            <ul>
                <li><Link to="/user/1">User 1</Link></li>
                <li><Link to="/user/2">User 2</Link></li>
                <li><Link to="/user/3">User 3</Link></li>
            </ul>

            {/* Button to navigate with parameters */}
            <button onClick={handleNavigation}>Go to User 4 with Data</button>

        </>
    )
}

export default Users