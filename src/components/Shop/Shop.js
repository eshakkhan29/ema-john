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
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='container-fluid'>
            <div className='row row-cols-lg-2 row-cols-1 d-flex justify-content-between'>
                <div className='col-lg-10 col-7 p-lg-5'>
                    <div className='row row-cols-lg-3 row-cols-1 g-4 p-lg-5'>
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
                <div className="col-lg-2 col-5 p-0">
                    <Cart
                        item={cart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;