import React from 'react';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='header d-flex justify-content-between align-items-center container'>
            <img src={logo} alt="" />
            <div>
                <a className='me-4 ' href="/Order">Order</a>
                <a className='me-4 ' href="/Review">Review</a>
                <a className='me-4 ' href="/Inventory">Inventory</a>
            </div>
        </div>
        </div>
    );
};

export default Header;