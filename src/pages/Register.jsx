import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-page bg-grid-pattern">
      <div className="auth-container">
        {/* Left Side Content */}
        <div className="auth-left">
          <Link to="/" className="auth-logo">
            <span className="logo-icon">b</span>
          </Link>
          
          <div className="auth-text">
            <h2>Sign up and come in</h2>
            <p>The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.</p>
          </div>
          
          {/* Floating Cards Graphic Placeholder */}
          <div className="auth-graphic">
            {/* The course cards image goes here */}
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Courses" className="mock-graphic" style={{borderRadius: '16px', marginTop: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
        
        {/* Right Side Form */}
        <div className="auth-right">
          <div className="auth-card">
            <span className="auth-subtitle">Create an Account</span>
            <h1 className="auth-title">Welcome to<br/>ByteSpace</h1>
            
            <form className="auth-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Jamie Davis" />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="designer@example.com" />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="********" />
              </div>
              
              <div className="form-actions align-right">
                <button type="button" className="btn-continue">Continue</button>
              </div>
            </form>
            
            <div className="auth-footer">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
