import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo logo-dark" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-badge">
              <span>b</span>
            </div>
            <span className="logo-text-dark">ByteSpace</span>
          </div>
          <p className="newsletter-desc">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>

          {subscribed ? (
            <div className="subscribe-success">
              ✓ Thank you for subscribing to ByteSpace updates!
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">Search</button>
            </form>
          )}

          <p className="privacy-text">
            By subscribing, you agree to our <a href="#">Privacy Policy</a> and consent to receive updates from our company.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="col-title">Courses</h4>
            <a href="#courses">Featured Courses</a>
            <a href="#courses">Featured Categories</a>
            <a href="#courses">Business</a>
            <a href="#courses">IT & Software</a>
            <a href="#courses">UI/UX Design</a>
          </div>
          <div className="footer-col">
            <h4 className="col-title">Categories</h4>
            <a href="#courses">Development</a>
            <a href="#courses">Marketing</a>
            <a href="#courses">Photography</a>
            <a href="#courses">Finance & Accounting</a>
            <a href="#courses">Sports & Fitness</a>
          </div>
          <div className="footer-col">
            <h4 className="col-title">Company</h4>
            <button className="footer-btn-link" onClick={() => onNavigate && onNavigate('signup')}>Become a Creator</button>
            <a href="#">Affiliate Program</a>
            <a href="#">Contact Us</a>
            <a href="#">Help Center</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2023 ByteSpace. All rights reserved.</p>
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

