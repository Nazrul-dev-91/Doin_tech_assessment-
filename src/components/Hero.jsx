import React from 'react';
import './Hero.css';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1>Get Access to Hundreds<br />Courses Available</h1>
        <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
        
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Course, topic, creator" />
          <button className="btn-primary search-btn">Search</button>
        </div>
      </div>
      
      {/* Decorative shapes and hero image will go here. In a real app we would slice the image, but we can structure placeholders or just let the background grid show for now, as I don't have the actual image assets locally. */}
      <div className="hero-decorations">
         <div className="lime-circle"></div>
         {/* More shapes would be added with img tags referencing actual assets */}
      </div>
    </section>
  );
};

export default Hero;
