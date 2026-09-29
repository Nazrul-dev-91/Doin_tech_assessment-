import React from 'react';
import './LearningPaths.css';
import { FiPenTool, FiCode, FiCpu, FiBriefcase, FiTarget, FiCamera } from 'react-icons/fi';

const LearningPaths = () => {
  const paths = [
    { name: 'Design', icon: <FiPenTool /> },
    { name: 'Development', icon: <FiCode /> },
    { name: 'IT & Software', icon: <FiCpu /> },
    { name: 'Business', icon: <FiBriefcase /> },
    { name: 'Marketing', icon: <FiMegaphone /> },
    { name: 'Photography', icon: <FiCamera /> },
  ];

  return (
    <section className="learning-paths container">
      <div className="learning-paths-header">
        <h2 className="paths-title">Explore Diverse Learning Paths at ByteSpace</h2>
        <p className="paths-subtitle">
          At ByteSpace, we believe in empowering individuals with the skills they need to succeed in their careers. That's why we offer a wide range of courses, carefully curated to help you unlock your potential.
        </p>
      </div>
      
      <div className="paths-grid">
        {paths.map((path, idx) => (
          <div key={idx} className="path-card">
            <div className="icon-badge">
              {path.icon}
            </div>
            <span className="path-name">{path.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPaths;

