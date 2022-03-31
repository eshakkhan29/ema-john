import React from 'react';

const Review = ({product}) => {
    const {name, quantity, price} = product;
    return (
        <div className='shadow-lg rounded-3'>
            <h4>Review components : {name}</h4>
        </div>
    );
};

export default Review;