import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <nav className='nav_Container'>
                <div className='Logo_Container'>
                    <h1>BEST-PRODUCT</h1>
                </div>
                <div className='link_Container'>
                    <Link className='link' to='/Home'>Home</Link>
                    <Link className='link' to='/reviews'>Reviews</Link>
                    <Link className='link' to='/dashboard'>Dashboard</Link>
                    <Link className='link' to='/blogs'>Blogs</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;