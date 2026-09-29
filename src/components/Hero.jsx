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
      {/* Floating 3D Shapes positioned across the entire Hero section */}
      <img src="/assets/shape-lime-helix-real.png" alt="Lime Helix" className="shape shape-lime-helix float-anim" />
      <img src="/assets/shape-white-helix-real.png" alt="White Helix" className="shape shape-white-helix-left float-anim-reverse" />
      <img src="/assets/shape-white-torus-real.png" alt="White Torus" className="shape shape-white-torus float-anim" />
      <img src="/assets/shape-lime-cylinder-real.png" alt="Lime Cylinder" className="shape shape-lime-cylinder float-anim-reverse" />
      <img src="/assets/shape-white-pyramid-real.png" alt="White Pyramid" className="shape shape-white-pyramid float-anim" />
      <img src="/assets/shape-white-helix-real.png" alt="White Helix" className="shape shape-white-helix-right float-anim-reverse" />

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
        {/* Green Arch Backdrop & Boy Image */}
        <div className="arch-wrapper">
          <div className="arch-background"></div>
          <img src="/assets/hero-student.png" alt="ByteSpace Student" className="hero-student-img" />

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

          <img 
            src="/assets/media__1790669330337.png" 
            alt="Happy Students" 
            className="card-happy-students-img float-anim" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

