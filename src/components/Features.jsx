import React, { useState } from 'react';
import './Features.css';

const Features = ({ activeCategory, onSelectCategory }) => {
  const [selected, setSelected] = useState(activeCategory || 'Start-ups');

  const categories = [
    "Start-ups", "Skills", "Creative & Thinking", "Art & Living", 
    "Data Science", "Audio & Music", "UI/UX Design", "Constantly Learning",
    "Finance & Accounting", "Web & App Dev", "Gaming", 
    "Personal & Professional Development", "Writing & Language", 
    "Photography", "Free Flexibility", "Social Media Management", 
    "Music Production", "Accounting", "+ More"
  ];

  const handlePillClick = (cat) => {
    setSelected(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  const partnerLogos = [
    { id: 1, name: "Logoipsum", icon: "❖" },
    { id: 2, name: "Logoipsum", icon: "⬡" },
    { id: 3, name: "Logoipsum", icon: "◈" },
    { id: 4, name: "Logoipsum", icon: "⬢" },
    { id: 5, name: "Logoipsum", icon: "❇" },
  ];

  return (
    <section className="features">
      {/* Partner Logos Bar */}
      <div className="logos-bar container">
        {partnerLogos.map((logo) => (
          <div key={logo.id} className="partner-logo">
            <span className="logo-symbol">{logo.icon}</span>
            <span className="logo-name">{logo.name}</span>
          </div>
        ))}
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

