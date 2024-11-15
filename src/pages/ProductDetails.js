import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ProductDetails = () => {

    const { id } = useParams();
    const location = useLocation();

    //const { name, price } = location.state;

    const productData = location.state;

    return (
        <>
            <h1>Product Details page</h1>

            <p> Product id  : {id}</p>

            {/* Here, you can use the 'id' to fetch data or display specific content */}

           

            <h3> Simply show data without object destructuring</h3>

            { productData && productData.name && 
            <p>{`${productData.name} is of ${productData.price}`} </p>
            }
        </>
    )
}

export default ProductDetails