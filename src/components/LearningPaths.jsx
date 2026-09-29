import React from 'react';
import './LearningPaths.css';

const LearningPaths = () => {
  const paths = [
    { id: 1, name: 'Design', iconImg: '/assets/figma-icon-design.png' },
    { id: 2, name: 'Development', iconImg: '/assets/figma-icon-dev.png' },
    { id: 3, name: 'IT & Software', iconImg: '/assets/figma-icon-it.png' },
    { id: 4, name: 'Business', iconImg: '/assets/figma-icon-biz.png' },
    { id: 5, name: 'Marketing', iconImg: '/assets/figma-icon-mkt.png' },
    { id: 6, name: 'Photography', iconImg: '/assets/figma-icon-photo.png' },
  ];

  return (
    <section className="learning-paths container">
      <div className="learning-paths-header">
        <h2 className="paths-title">Explore Diverse Learning Paths at ByteSpace</h2>
        <p className="paths-subtitle">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>
      
      <div className="paths-grid">
        {paths.map((path) => (
          <div key={path.id} className="path-card">
            <div className="icon-badge">
              <img src={path.iconImg} alt={path.name} className="path-icon-img" />
            </div>
            <span className="path-name">{path.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPaths;
