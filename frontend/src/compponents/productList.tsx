import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/categories/Laptop/products?top=10')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Top Products</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product: any) => (
                    <div key={product.productName} className="border p-4">
                        <h2 className="text-xl font-semibold">{product.productName}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Discount: {product.discount}%</p>
                        <p>{product.availability}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
