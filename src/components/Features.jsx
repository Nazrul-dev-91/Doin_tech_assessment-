import React, { useState } from 'react';
import './Features.css';

const Features = ({ activeCategory, onSelectCategory }) => {
  const [selected, setSelected] = useState(activeCategory || 'Featured');

  const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing", 
    "Animation", "Social Media", "UI/UX Design", "Creative Marketing",
    "Digital Illustration", "Film & Video", "Crafts", 
    "Freelance & Entrepreneurship", "Graphic Design", 
    "Productivity", "Web Development", "Data Science", 
    "Cooking", "+ More"
  ];

  const handlePillClick = (cat) => {
    setSelected(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  const partnerLogos = [
    { id: 1, name: "Logoipsum 1", img: "/assets/partner-logo-1.png" },
    { id: 2, name: "Logoipsum 2", img: "/assets/partner-logo-2.png" },
    { id: 3, name: "Logoipsum 3", img: "/assets/partner-logo-3.png" },
    { id: 4, name: "Logoipsum 4", img: "/assets/partner-logo-4.png" },
    { id: 5, name: "Logoipsum 5", img: "/assets/partner-logo-5.png" },
  ];

  return (
    <section className="features">
      {/* Partner Logos Bar */}
      <div className="logos-bar-section">
        <div className="logos-bar container">
          {partnerLogos.map((logo) => (
            <div key={logo.id} className="partner-logo-item">
              <img src={logo.img} alt={logo.name} className="partner-logo-img" />
            </div>
          ))}
        </div>
      </div>

      <div className="container discover-section">
        <h2 className="discover-title">
          Discover Your Passion,<br />
          Build Your Skills
        </h2>
        <p className="discover-subtitle">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        <div className="categories-pills">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`pill ${selected === cat ? 'active' : ''}`}
              onClick={() => handlePillClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

