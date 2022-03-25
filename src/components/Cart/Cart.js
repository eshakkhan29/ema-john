import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css';

const Cart = ({item}) => {
    let price = 0;
    let shipping = 0;
    for(const product of item){
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = (price + shipping + tax).toFixed(2);
    return (
        <div className='cart p-3'>
            <h3 className='text-center'>Order Summary</h3>
            <div className='mt-5'>
                <h6 className='fs-5'>Selected Items: {item.length}</h6>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal}</h5>
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