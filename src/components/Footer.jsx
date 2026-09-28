import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">b</span>
              <span className="logo-text">ByteSpace</span>
            </Link>
            <p className="footer-desc">
              Empower yourself with world-class education and build your skills for a better tomorrow.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
            <p className="subscribe-note">
              Subscribe to get our latest news, courses updates, and exclusive offers.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/creators">Creators</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/partners">Partners</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ByteSpace. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
