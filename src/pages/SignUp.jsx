import React, { useState } from 'react';
import './Auth.css';
import { FiArrowLeft } from 'react-icons/fi';

const SignUp = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="auth-page blue-grid-bg">
      {/* Top Left Header / Back Button */}
      <div className="auth-top-header">
        <button className="auth-back-btn" onClick={() => onNavigate('home')}>
          <FiArrowLeft /> Back to Home
        </button>
      </div>

      <div className="auth-container">
        {/* Left Side Content */}
        <div className="auth-left">
          <div className="auth-brand" onClick={() => onNavigate('home')}>
            <img src="/assets/logo-b.png" alt="ByteSpace Logo" className="logo-b-img" />
          </div>

          <h1 className="auth-left-title">Sign up and come in</h1>
          <p className="auth-left-desc">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>

          {/* Card Collage Visual matching Figma sample */}
          <div className="auth-collage-wrapper">
            {/* Top Left: Lime Torus */}
            <img src="/assets/auth-lime-torus.png" alt="Lime Torus" className="auth-3d-torus float-anim" />

            {/* Back Course Card: Build Digital Asset */}
            <img src="/assets/auth-course-build-asset.png" alt="Build Digital Asset Course" className="auth-course-card-back" />

            {/* Front Course Card: the Power of Big Data */}
            <img src="/assets/auth-course-power-data.png" alt="The Power of Big Data Course" className="auth-course-card-front" />

            {/* Bottom Left: Lime Pyramid */}
            <img src="/assets/auth-lime-pyramid.png" alt="Lime Pyramid" className="auth-3d-pyramid float-anim-reverse" />

            {/* Bottom Right: White Helix */}
            <img src="/assets/auth-white-helix.png" alt="White Helix" className="auth-3d-helix float-anim" />

            {/* Bottom Right: Lime Happy Students Card */}
            <img src="/assets/auth-happy-lime.png" alt="Happy Students" className="auth-happy-card-img float-anim-reverse" />
          </div>
        </div>

        {/* Right Side Card Form */}
        <div className="auth-right">
          <div className="auth-card">
            <span className="auth-sub-label">Create an Account</span>
            <h2 className="auth-card-title">Welcome to<br />ByteSpace</h2>

            <form onSubmit={handleSubmit} className="auth-form-body">
              <div className="auth-field-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Jamie Davis" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required 
                />
              </div>

              <div className="auth-field-group">
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="designer@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="auth-field-group">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              <div className="auth-action-row">
                <button type="submit" className="btn-primary auth-btn-submit">
                  Continue
                </button>
              </div>

              <p className="auth-switch-text">
                Already have an account?{' '}
                <button type="button" className="auth-link-btn" onClick={() => onNavigate('signin')}>
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
