import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({addToCart, product}) => {
    const {img, price, name, ratings, seller,} = product;
    return (
        <div className='col'>
            <div className="card">
                <img className='card-img-top p-2 image' src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4 className=''>price: ${price}</h4>
                    <div className='mt-5'>
                        <p className="card-text m-0">Manufacturer: {seller}</p>
                        <p className="card-text">ratings: {ratings}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => addToCart(product)} className='cart-button fw-bold w-100 p-3 fs-6'>Add to Cart 
                    <span className='ms-3'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;