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
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button>Search</button>
            </div>
            <p className="subscribe-note">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group no-heading">
              <ul>
                <li><Link to="/">Featured Courses</Link></li>
                <li><Link to="/">Featured Categories</Link></li>
                <li><Link to="/">Business</Link></li>
                <li><Link to="/">IT</Link></li>
                <li><Link to="/">Design</Link></li>
              </ul>
            </div>
            
            <div className="link-group no-heading">
              <ul>
                <li><Link to="/">Development</Link></li>
                <li><Link to="/">Marketing</Link></li>
                <li><Link to="/">Photography</Link></li>
                <li><Link to="/">Finance</Link></li>
                <li><Link to="/">Sport</Link></li>
              </ul>
            </div>
            
            <div className="link-group no-heading">
              <ul>
                <li><Link to="/">Become a Creator</Link></li>
                <li><Link to="/">Affiliate Program</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Help</Link></li>
                <li><Link to="/">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
