
// at first  Header component e logo set korbo
import React from 'react';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="nav">
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventorry">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;