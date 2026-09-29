import React from 'react';
import './Header.css';
import { FiShoppingBag } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="header container">
      <div className="logo">
        <span className="logo-icon">b</span>
        <span className="logo-text">ByteSpace</span>
      </div>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#courses">Courses</a>
        <a href="#creators">Creators</a>
      </nav>
      <div className="auth-cart">
        <a href="#signin" className="signin">Sign In</a>
        <a href="#join" className="join">Join Us</a>
        <button className="cart-btn">
          <FiShoppingBag />
        </button>
      </div>
    </header>
  );
};

export default Header;
