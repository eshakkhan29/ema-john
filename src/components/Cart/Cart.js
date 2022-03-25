import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css';

const Cart = ({item}) => {
    console.log(item);
    return (
        <div className='cart p-3'>
            <h3 className='text-center'>Order Summary</h3>
            <div className='mt-5'>
                <p>Selected Items: {item.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax: ${}</p>
                <h4>Grand Total: ${}</h4>
            </div>
           <div className='text-center mt-5'>
            <button className='btn btn-danger w-75 p-2 mb-3'>Clear Cart
            <span className='ms-2'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span>
            </button>
            <button className='btn btn-warning w-75 p-2'>Review Order
            <span className='ms-2'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
            </button>
           </div>
        </div>
    );
};

export default Cart;