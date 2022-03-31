import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className='me-4 ' to="/shop">Shop</Link>
                    <Link className='me-4 ' to="/orders">Orders</Link>
                    <Link className='me-4 ' to="/inventory">Inventory</Link>
                    <Link className='me-4 ' to="/about">About</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;