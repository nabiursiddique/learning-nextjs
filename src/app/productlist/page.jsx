"use client"

import { useEffect, useState } from "react";

const ProductList = () => {
    // Data fetching on the client side.
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product, ind) => (
                    <h3 key={ind}>Name: {product.title}, Price: {product.price}</h3>
                ))
            }
        </div>
    );
};

export default ProductList;