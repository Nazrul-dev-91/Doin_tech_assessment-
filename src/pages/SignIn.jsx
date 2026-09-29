import React, { useState } from 'react';
import './Auth.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';

const SignIn = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="auth-page blue-grid-bg">
      {/* Top Left Header / Brand */}
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

          <h1 className="auth-left-title">Sign in with ease</h1>
          <p className="auth-left-desc">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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

            <div className="auth-course-card card-front">
              <div className="card-thumb-bg bg-power-data">
                <div className="card-top-tags">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                  <span>59 Comments</span>
                </div>
              </div>
              <div className="card-front-body">
                <div className="card-title-row">
                  <h4>the Power of Big Data</h4>
                  <span className="card-rating">4.5 ★</span>
                </div>
                <span className="card-author">by purepearl studio</span>
                <div className="card-meta-row">
                  <span className="card-pill">Beginner</span>
                  <div className="card-avatars">
                    <img src="/assets/testimonial-1.png" alt="User" />
                    <img src="/assets/testimonial-2.png" alt="User" />
                    <img src="/assets/testimonial-3.png" alt="User" />
                    <span className="more-count">26+</span>
                  </div>
                </div>
                <div className="card-price">$25<span>/lifetime</span></div>
              </div>
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
            <span className="auth-sub-label">Sign In</span>
            <h2 className="auth-card-title">Welcome Back</h2>

            <form onSubmit={handleSubmit} className="auth-form-body">
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
                  Sign In
                </button>
              </div>

              <div className="auth-or-divider">
                <span>or</span>
              </div>

              <div className="social-circle-row">
                <button type="button" className="social-circle-btn fb-circle">
                  <FaFacebookF />
                </button>
                <button type="button" className="social-circle-btn google-circle">
                  <FcGoogle />
                </button>
              </div>

              <p className="auth-switch-text">
                New user?{' '}
                <button type="button" className="auth-link-btn" onClick={() => onNavigate('signup')}>
                  Create an account
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
