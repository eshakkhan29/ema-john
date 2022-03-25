import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const addToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-between'>
                <div className='col-10 p-5'>
                    <div className='row row-cols-3 g-4 p-5'>
                    {
                        product.map(product => <Product 
                            key={product.id} 
                            product={product}
                            addToCart={addToCart}
                            >
                            </Product>)
                    }
                    </div>
                </div>
                <div className="col-2">
                    <Cart
                        item={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;