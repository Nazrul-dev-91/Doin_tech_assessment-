import React, { useState } from 'react';
import './Auth.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const SignUp = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms of Service & Privacy Policy.");
      return;
    }
    alert(`Account created successfully! Welcome to ByteSpace, ${fullName}`);
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
            Join Thousands of<br />
            Learners & Creators
          </h1>
          <p className="auth-hero-desc">
            Create an account to gain access to hundreds of courses, track your learning progress, and earn certificates.
          </p>

          <div className="auth-visual-wrapper">
            <img src="/assets/growth-woman.png" alt="ByteSpace Student" className="auth-student-img" />
            <img src="/assets/3d-cylinder.png" alt="Shape" className="auth-shape-helix float-anim" />
            <img src="/assets/3d-pyramid.png" alt="Shape" className="auth-shape-torus float-anim-reverse" />
          </div>
        </div>
      </div>

      {/* Right Form Card */}
      <div className="auth-right">
        <div className="auth-form-card">
          <div className="auth-header">
            <h2>Create an Account</h2>
            <p>Start learning or sharing your expertise on ByteSpace today.</p>
          </div>

          <div className="social-buttons">
            <button className="social-btn google-btn">
              <FcGoogle className="social-icon" /> Sign up with Google
            </button>
            <button className="social-btn facebook-btn">
              <FaFacebook className="social-icon fb-color" /> Sign up with Facebook
            </button>
          </div>

          <div className="auth-divider">
            <span>OR REGISTER WITH EMAIL</span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-wrapper">
                <FiUser className="input-icon" />
                <input 
                  id="fullName"
                  type="text" 
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required 
                />
              </div>
            </div>

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
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <FiLock className="input-icon" />
                <input 
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Must be at least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
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
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <span className="checkmark"></span>
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="btn-primary auth-submit-btn">
              Create Account
            </button>
          </form>

          <p className="auth-footer-text">
            Already have an account?{' '}
            <button className="auth-switch-btn" onClick={() => onNavigate('signin')}>
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
