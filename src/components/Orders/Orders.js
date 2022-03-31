import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducs';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Orders = () => {
    const [product, setProduct] = useProducts();
  const [cart, setCart] = useCart(product);
    return (
        <div className='row row-cols-lg-2 mt-5'>
            <div className='col-lg-7 p-5 d-flex flex-column align-items-center'>
                {
                    cart.map(product => <Review 
                        key={product.id}
                        product={product}
                    ></Review> )
                }
            </div>
            <div className='col-lg-5 p-5 rounded-3'>
                <Cart item={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;