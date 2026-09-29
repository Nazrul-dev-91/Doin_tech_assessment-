import React from 'react';
import './Header.css';
import { FiShoppingBag } from 'react-icons/fi';

const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="header container">
      <div className="logo" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
        <div className="logo-badge">
          <span>b</span>
        </div>
        <span className="logo-text">ByteSpace</span>
      </div>
      
      <nav className="navbar">
        <button 
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate && onNavigate('home')}
        >
          Home
        </button>
        <a href="#courses" className="nav-link" onClick={(e) => {
          if (currentPage !== 'home') {
            e.preventDefault();
            onNavigate('home');
            setTimeout(() => {
              document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}>
          Courses
        </a>
        <a href="#creators" className="nav-link" onClick={(e) => {
          if (currentPage !== 'home') {
            e.preventDefault();
            onNavigate('home');
            setTimeout(() => {
              document.getElementById('creators')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }}>
          Creators
        </a>
      </nav>
      
      <div className="auth-cart">
        <button 
          className={`signin-btn ${currentPage === 'signin' ? 'active' : ''}`} 
          onClick={() => onNavigate && onNavigate('signin')}
        >
          Sign In
        </button>
        <button 
          className={`join-btn ${currentPage === 'signup' ? 'active' : ''}`}
          onClick={() => onNavigate && onNavigate('signup')}
        >
          Join Us
        </button>
        <button className="cart-btn" aria-label="Shopping Cart">
          <FiShoppingBag />
          <span className="cart-badge">2</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

