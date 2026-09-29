import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo logo-dark">
            <span className="logo-icon">b</span>
            <span className="logo-text">ByteSpace</span>
          </div>
          <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-primary">Search</button>
          </div>
          <p className="privacy-text">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <a href="#">Featured Courses</a>
            <a href="#">Featured Categories</a>
            <a href="#">Business</a>
            <a href="#">IT</a>
            <a href="#">Design</a>
          </div>
          <div className="footer-col">
            <a href="#">Development</a>
            <a href="#">Marketing</a>
            <a href="#">Photography</a>
            <a href="#">Finance</a>
            <a href="#">Sport</a>
          </div>
          <div className="footer-col">
            <a href="#">Become a Creator</a>
            <a href="#">Affiliate Program</a>
            <a href="#">Contact</a>
            <a href="#">Help</a>
            <a href="#">About</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 ByteSpace. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
