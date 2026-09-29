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

          {/* Card Collage Visual */}
          <div className="auth-collage-wrapper">
            <img src="/assets/3d-torus.png" alt="Torus" className="auth-3d-torus float-anim" />
            <img src="/assets/3d-pyramid.png" alt="Pyramid" className="auth-3d-pyramid float-anim-reverse" />
            <img src="/assets/3d-helix-white.png" alt="Helix" className="auth-3d-helix float-anim" />

            {/* Course Stack */}
            <div className="auth-course-card card-back">
              <div className="card-thumb-bg bg-build-asset"></div>
              <h4>Build Digital Asset</h4>
              <span className="card-author">by purepearl studio</span>
              <div className="card-pill">Beginner</div>
            </div>



            <div className="auth-happy-card">
              <h5>Happy Students</h5>
              <div className="happy-rating">4.5 (240) ★</div>
              <div className="happy-avatars">
                <img src="/assets/testimonial-1.png" alt="User" />
                <img src="/assets/testimonial-2.png" alt="User" />
                <img src="/assets/testimonial-3.png" alt="User" />
                <img src="/assets/growth-boy.png" alt="User" />
                <span className="more-count-lime">2K+</span>
              </div>
            </div>
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
