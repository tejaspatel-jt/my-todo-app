import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Products = () => {

    const navigate = useNavigate();

    const handleNavigation = () => {

        // Navigate to /product/4 and pass data as state
        navigate('/product/4', {
            state: {
                name: 'Product 4',
                price: 30
            },
        })
    }

    return (
        <>
            <h1>Product  Listing</h1>

            <ul>
                <li><Link to="/product/1">Product 1</Link></li>
                <li><Link to="/product/2">Product 2</Link></li>
                <li><Link to="/product/3">Product 3</Link></li>
            </ul>

            {/* Button to navigate with parameters */}
            <button onClick={handleNavigation}>Go to Product 4 with Data</button>

        </>
    )
}

export default Products