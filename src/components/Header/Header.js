import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    const handelLogOut = () => {
        signOut(auth).then(()=>{

        })
    }
    return (
        <div className='header container-fluid'>
            <div className='container'>
                <div className='row header d-flex justify-content-between align-items-center'>
                <div className='col'>
                    <img src={logo} alt="" />
                </div>
                <div className='col text-end'>
                    <Link className='me-4' to="/shop">Shop</Link>
                    <Link className='me-4' to="/orders">Orders</Link>
                    <Link className='me-4' to="/inventory">Inventory</Link>
                    <Link className='me-4' to="/about">About</Link>
                    {   user?.uid ? 
                        <button onClick={handelLogOut} className='me-4 logout-button' >Log Out</button>
                        : 
                        <Link className='me-4' to="/login">Login</Link>
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Header;