import React, { useState } from 'react';
import './Hero.css';
import { FiSearch } from 'react-icons/fi';

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
  };

  return (
    <section className="hero container">
      {/* Floating 3D Shapes matching Figma layout */}
      <img src="/assets/shape-lime-helix-clean.png" alt="Lime Helix" className="shape shape-lime-helix float-anim" />
      <img src="/assets/shape-white-helix-clean.png" alt="White Helix" className="shape shape-white-helix-left float-anim-reverse" />
      <img src="/assets/shape-white-torus-clean.png" alt="White Torus" className="shape shape-white-torus float-anim" />
      <img src="/assets/shape-lime-cylinder-real.png" alt="Lime Cylinder" className="shape shape-lime-cylinder float-anim-reverse" />
      <img src="/assets/shape-white-pyramid-clean.png" alt="White Pyramid" className="shape shape-white-pyramid float-anim" />
      <img src="/assets/shape-white-helix-clean.png" alt="White Helix" className="shape shape-white-helix-right float-anim-reverse" />

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

      {/* Visual Centerpiece */}
      <div className="hero-visual-container">
        <div className="arch-wrapper">
          {/* Arch Backdrop & Student Image */}
          <img src="/assets/hero-arch-clean.png" alt="Hero Arch" className="hero-arch-img" />
          <img src="/assets/hero-student.png" alt="ByteSpace Student" className="hero-student-img" />

          {/* Floating UI Cards */}
          <img src="/assets/card-ui-ux-clean.png" alt="UI/UX Design Card" className="hero-card card-ui-ux-img float-anim" />
          <img src="/assets/card-progress-clean.png" alt="Learning Progress Card" className="hero-card card-progress-img float-anim-reverse" />
          <img src="/assets/card-happy-students-clean.png" alt="Happy Students Card" className="hero-card card-happy-img float-anim" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

