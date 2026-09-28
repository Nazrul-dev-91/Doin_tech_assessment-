import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-page bg-grid-pattern">
      <div className="auth-container">
        {/* Left Side Content */}
        <div className="auth-left">
          <Link to="/" className="auth-logo">
            <span className="logo-icon">b</span>
          </Link>
          
          <div className="auth-text">
            <h2>Sign in with ease</h2>
            <p>Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
          </div>
          
          <div className="auth-graphic">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Courses" className="mock-graphic" style={{borderRadius: '16px', marginTop: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}} />
          </div>
        </div>
        
        {/* Right Side Form */}
        <div className="auth-right">
          <div className="auth-card">
            <span className="auth-subtitle">Sign In</span>
            <h1 className="auth-title">Welcome Back</h1>
            
            <form className="auth-form">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="designer@example.com" />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="********" />
              </div>
              
              <div className="form-actions align-right">
                <button type="button" className="btn-continue">Sign In</button>
              </div>
            </form>
            
            <div className="auth-divider">
              <span>or</span>
            </div>
            
            <div className="social-login">
              <button className="btn-social" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" fill="#1877F2"/>
                </svg>
              </button>
              <button className="btn-social" aria-label="Google">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>
            </div>
            
            <div className="auth-footer text-center">
              <p>New user? <Link to="/register">Create an account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
