import React from 'react';
import './Features.css';

const Features = () => {
  const categories = [
    "Digital Illustration", "Film & Video", "Crafts", 
    "Freelance & Entrepreneurship", "Graphic Design", "Photography",
    "Featured", "Music", "Drawing & Painting", "Marketing",
    "Animation", "Social Media", "UI/UX Design", "Creative Marketing"
  ];

  const logos = [1, 2, 3, 4, 5];

  return (
    <section className="features">
      <div className="logos-bar">
        {logos.map(i => (
          <div key={i} className="logo-placeholder">Logoipsum</div>
        ))}
      </div>

      <div className="container discover-section">
        <h2>Discover Your Passion,<br/>Build Your Skills</h2>
        <p className="subtitle">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        <div className="categories-pills">
          {categories.map((cat, idx) => (
            <span key={idx} className={`pill ${cat === 'Featured' ? 'active' : ''}`}>
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
