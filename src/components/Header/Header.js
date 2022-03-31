import React from 'react';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    return (
        <div className='header container-fluid'>
            <div className='container'>
                <div className='row header d-flex justify-content-between align-items-center'>
                <div className='col'>
                    <img src={logo} alt="" />
                </div>
                <div className='col text-end'>
                    <a className='me-4 ' href="/shop">Shop</a>
                    <a className='me-4 ' href="/orders">Orders</a>
                    <a className='me-4 ' href="/inventory">Inventory</a>
                    <a className='me-4 ' href="/about">About</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;