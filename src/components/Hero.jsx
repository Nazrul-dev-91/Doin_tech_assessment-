import React, { useState } from 'react';
import './Hero.css';
import { FiSearch, FiStar } from 'react-icons/fi';

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <section className="hero container">
      {/* Top Text Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Get Access to Hundreds<br />
          Courses Available
        </h1>
        <p className="hero-subtitle">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="hero-search-bar" onSubmit={handleSubmit}>
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Course, topic, creator" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn-primary search-btn">
            Search
          </button>
        </form>
      </div>

      {/* Visual Centerpiece with Floating 3D Assets & Cards */}
      <div className="hero-visual-container">
        {/* Floating 3D Shapes */}
        <img src="/assets/3d-helix-white.png" alt="3D Shape" className="shape shape-lime-helix float-anim" />
        <img src="/assets/3d-cylinder.png" alt="3D Shape" className="shape shape-lime-cylinder float-anim-reverse" />
        <img src="/assets/3d-torus.png" alt="3D Shape" className="shape shape-white-torus float-anim" />
        <img src="/assets/3d-pyramid.png" alt="3D Shape" className="shape shape-white-pyramid float-anim-reverse" />
        <img src="/assets/3d-helix-white.png" alt="3D Shape" className="shape shape-white-helix float-anim" />

        {/* Green Arch Backdrop & Boy Image */}
        <div className="arch-wrapper">
          <div className="arch-background"></div>
          <img src="/assets/growth-boy.png" alt="ByteSpace Student" className="hero-student-img" />

          {/* Floating UI Cards */}
          <div className="hero-card card-ui-ux float-anim">
            <h4>UI/UX Design</h4>
            <p>200 Courses • 1000+ Students</p>
          </div>

          <div className="hero-card card-progress float-anim-reverse">
            <span className="card-label">Learning Progress</span>
            <div className="progress-value">55%</div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '55%' }}></div>
            </div>
          </div>

          <div className="hero-card card-happy-students float-anim">
            <div className="students-header">
              <span className="card-label">Happy Students</span>
              <div className="rating-badge">
                4.5 <span>(240)</span> <FiStar className="star-yellow" />
              </div>
            </div>
            <div className="avatar-group">
              <img src="/assets/testimonial-1.png" alt="Student" className="avatar-img" />
              <img src="/assets/testimonial-2.png" alt="Student" className="avatar-img" />
              <img src="/assets/testimonial-3.png" alt="Student" className="avatar-img" />
              <img src="/assets/course-1.png" alt="Student" className="avatar-img" />
              <img src="/assets/course-2.png" alt="Student" className="avatar-img" />
              <span className="avatar-more">2K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

