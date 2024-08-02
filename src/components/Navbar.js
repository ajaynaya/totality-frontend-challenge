// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Property Rental</Link>
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
          <li className="navbar-item"><Link to="/cart" className="navbar-link">Cart</Link></li>
          
        </ul>
        <div className="navbar-cart">
          <Link to="/cart" className="navbar-cart-link">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="navbar-cart-count">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
