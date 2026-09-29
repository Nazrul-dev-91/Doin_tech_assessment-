import React from 'react';
import './Growth.css';
import { FiCheckCircle } from 'react-icons/fi';

const Growth = () => {
  return (
    <section className="growth container">
      <div className="growth-content">
        <h2>Your Path to Professional<br/>Growth Starts Here!</h2>
        <p>Opt for ByteSpace for a dynamic learning journey. Benefit from expert-led courses, engaging practical projects, and a community dedicated to lifelong learning. Your career advancement begins with us.</p>
        
        <div className="stats-row">
          <div className="stat-item">
            <h4>12K</h4>
            <span>Students</span>
          </div>
          <div className="stat-item">
            <h4>70+</h4>
            <span>Courses</span>
          </div>
          <div className="stat-item">
            <h4>18</h4>
            <span>Mentors</span>
          </div>
        </div>
      </div>
      
      <div className="growth-image-placeholder">
        {/* Placeholder for the boy with laptop image */}
        <div className="img-bg"></div>
      </div>
      
      <div className="growth-image-placeholder alt-layout">
         {/* Placeholder for the woman with headset image */}
         <div className="img-bg woman-bg"></div>
      </div>
      
      <div className="growth-content create-manage">
        <h2>Create & Manage<br/>Courses Easily.</h2>
        <p><strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
        
        <ul className="feature-list">
          <li><FiCheckCircle className="check-icon"/> Share Your Expertise</li>
          <li><FiCheckCircle className="check-icon"/> Monetize Your Passion</li>
          <li><FiCheckCircle className="check-icon"/> Flexibility and Autonomy</li>
          <li><FiCheckCircle className="check-icon"/> Build a Community</li>
        </ul>
      </div>
    </section>
  );
};

export default Growth;
