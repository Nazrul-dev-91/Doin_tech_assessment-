import React, { useState } from 'react';
import './Auth.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FiArrowLeft, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const SignIn = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back to ByteSpace! Signed in as ${email}`);
    onNavigate('home');
  };

  return (
    <div className="auth-page">
      {/* Left Blue Grid Showcase */}
      <div className="auth-left blue-grid-bg">
        <button className="auth-back-btn" onClick={() => onNavigate('home')}>
          <FiArrowLeft /> Back to Home
        </button>

        <div className="auth-brand" onClick={() => onNavigate('home')}>
          <div className="logo-badge">
            <span>b</span>
          </div>
          <span className="logo-text">ByteSpace</span>
        </div>

        <div className="auth-left-content">
          <h1 className="auth-hero-title">
            Get Access to Hundreds<br />
            Courses Available
          </h1>
          <p className="auth-hero-desc">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <div className="auth-visual-wrapper">
            <img src="/assets/growth-boy.png" alt="ByteSpace Student" className="auth-student-img" />
            <img src="/assets/3d-helix-white.png" alt="Shape" className="auth-shape-helix float-anim" />
            <img src="/assets/3d-torus.png" alt="Shape" className="auth-shape-torus float-anim-reverse" />
          </div>
        </div>
      </div>

      {/* Right Form Card */}
      <div className="auth-right">
        <div className="auth-form-card">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your account to continue your learning journey.</p>
          </div>

          <div className="social-buttons">
            <button className="social-btn google-btn">
              <FcGoogle className="social-icon" /> Continue with Google
            </button>
            <button className="social-btn facebook-btn">
              <FaFacebook className="social-icon fb-color" /> Continue with Facebook
            </button>
          </div>

          <div className="auth-divider">
            <span>OR SIGN IN WITH EMAIL</span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <FiMail className="input-icon" />
                <input 
                  id="email"
                  type="email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-link" onClick={(e) => { e.preventDefault(); alert("Password reset link sent!"); }}>
                  Forgot password?
                </a>
              </div>
              <div className="input-wrapper">
                <FiLock className="input-icon" />
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <button 
                  type="button" 
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="form-checkbox-row">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember me for 30 days
              </label>
            </div>

            <button type="submit" className="btn-primary auth-submit-btn">
              Sign In
            </button>
          </form>

          <p className="auth-footer-text">
            Don't have an account?{' '}
            <button className="auth-switch-btn" onClick={() => onNavigate('signup')}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
