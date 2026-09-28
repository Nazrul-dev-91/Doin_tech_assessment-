import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <span className="logo-icon">b</span>
          <span className="logo-text">ByteSpace</span>
        </Link>
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/creators">Creators</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to="/login" className="nav-signin">Sign In</Link>
        <Link to="/register" className="nav-joinus">Join Us</Link>
        <button className="nav-cart" aria-label="Cart">
          <ShoppingBag size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
